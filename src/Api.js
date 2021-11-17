import axios from "axios";


const BASE_API_URL = "http://localhost:5000";


/** bluerprint for making request 
 * accepts endpoint for request, data, method(default to get)
 * automatically includes token
 * returns response wrapped in try/catch
*/

class FrienderApi {

  static token;

  /** Get token for login from username, password. */
  static async login(data) {
    let result = await axios.post(`${BASE_API_URL}/login`, data);
    if (result.data.errors) {
      throw new Error(result.data.errors);

    } else {
      return result.data.token;
    }
  }

  /**Registers user in database. 
   * Output: registered user
   * [
        {   "user_id",
            "username",
            "first_name",
            "last_name",
            "email",
            "hobbies",
            "interests",
            "zip_code",
            "image"         
        },...
      ] */
  static async registerUser(formData) {
    const result = await axios.post(`${BASE_API_URL}/users`, formData, {
      headers: {
        Authorization: `Bearer ${FrienderApi.token}`,
        'Content-Type': 'multipart/form-data'
      }
    });

    if(result.data.errors){
      throw new Error(result.data.errors)
    }

    return result.data.token;
  } 

  /**Gets user by user_id
   * Input: userId  
   * Output: user data LIKE:
   *{"user": 
        {  "username",
            "first_name",
            "last_name",
            "email",
            "hobbies",
            "interests",
            "zip_code",
            "image"         
        } 
    }*/
  static async getById(userId) {
    const result = await axios.get(`${BASE_API_URL}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${FrienderApi.token}`
      }
    });
    return result.data;
  }

  /**deletes user based upon id
  * Input: userId  
  * Output: {"deleted": userId}*/
  static async deleteById(userId) {
    const result = await axios.delete(`${BASE_API_URL}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${FrienderApi.token}`
      }
    });
    return result.data;
  }

  /**deletes user based upon id
  * Input: userId and newUserData LIKE {key,value} e.g. 
  * {username: 'newUsername',
  * hobbies:'new hobbies'
  * } 
  * Output: updated user data object {user:{username,first_name,......}}*/
  static async updateUser(userId, newUserData) {
    const result = await axios.patch(`${BASE_API_URL}/users/${userId}`, newUserData, {
      headers: {
        Authorization: `Bearer ${FrienderApi.token}`
      }
    });
    return result.data;
  }

  /**get all users in database
  * Input: nothing
  * Output: {users:{user},{user},{user},......}*/
  static async getAll() {
    const result = await axios.get(`${BASE_API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${FrienderApi.token}`
      }
    });
    return result.data;
  }
  
  /**get potential matches for user
  * Input: userId, Zip COde
  * Output users that this person can act upon: {users:{user},{user},{user},......}*/
  static async getPotentialMatches(userId, zipCode){
    console.log("is the zip going in right? ", zipCode);
    //this is the wrong route, need to take out user ID
    const result = await axios.get(`${BASE_API_URL}/potentials/${userId}/${zipCode}`, {
      headers: {
        Authorization: `Bearer ${FrienderApi.token}`
      }
    });
    return result.data;
  }

  /**add "action" to database
  * Input: acting user id, targeted user id, action (like. pass, etc)
  * Output the serialized action*/
  static async addAction(actingUserId,targetedUserId,action){
    const requestData = {
                        "acting_user_id": actingUserId,
                        "targeted_user_id":targetedUserId,
                        "action":action
                        }
    const result = await axios.post(`${BASE_API_URL}/action`, requestData, {
      headers: {
        Authorization: `Bearer ${FrienderApi.token}`
      }
    });
    return result.data;
  }

  /**get all matches for a user
  * Input: userId
  * Output user matches: {users:{user},{user},{user},......}*/
  static async getAllMatches(userId){
    const result = await axios.get(`${BASE_API_URL}/${userId}/matches`, {
      headers: {
        Authorization: `Bearer ${FrienderApi.token}`
      }
    });
    console.log(result.data)
    return result.data;
  }

}


export default FrienderApi;