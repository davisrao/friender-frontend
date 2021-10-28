import axios from "axios";


const BASE_API_URL = "http://localhost:5000";


/** bluerprint for making request 
 * accepts endpoint for request, data, method(default to get)
 * returns response wrapped in try/catch
*/

class FrienderApi {

  // static async request(endpoint, data = {}, method = "get") {
  //     console.debug("API Call:", endpoint, data, method);

  //     const url = `${BASE_URL}/${endpoint}`;
  //     const headers = { Authorization: `Bearer ${JoblyApi.token}` };
  //     const params = (method === "get")
  //       ? data
  //       : {};

  //     console.log({ url, data, params, headers, method })
  //     try {
  //       return (await axios({ url, method, data, params, headers })).data;
  //     } catch (err) {
  //       console.error("API Error:", err.response);
  //       let message = err.response.data.error.message;
  //       throw Array.isArray(message) ? message : [message];
  //     }
  //   }



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
        'Content-Type': 'multipart/form-data'
      }
    });
    return result.data;
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
    const result = await axios.get(`${BASE_API_URL}/users/${userId}`);
    return result.data;
  }

  /**deletes user based upon id
  * Input: userId  
  * Output: {"deleted": userId}*/
  static async deleteById(userId) {
    const result = await axios.delete(`${BASE_API_URL}/users/${userId}`);
    return result.data;
  }

  /**deletes user based upon id
  * Input: userId and newUserData LIKE {key,value} e.g. 
  * {username: 'newUsername',
  * hobbies:'new hobbies'
  * } 
  * Output: updated user data object {user:{username,first_name,......}}*/
  static async updateUser(userId,newUserData) {
    const result = await axios.patch(`${BASE_API_URL}/users/${userId}`, newUserData);
    return result.data;
  }

  /**get all users in database
  * Input: nothing
  * Output: {users:{user},{user},{user},......}*/
     static async getAll() {
      const result = await axios.get(`${BASE_API_URL}/users`);
      return result.data;
    }
}

export default FrienderApi;