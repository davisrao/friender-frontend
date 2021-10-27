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
        {
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

  //   /**Pulls all drinks from database. 
  //    * Output: array of all drink objects.
  //    * [
  //      {
  //         "id": "martini",
  //         "name": "Martini",
  //         "description": "An ice-cold, refreshing classic.",
  //         "recipe": "Mix 3 parts vodka & 1 part dry vermouth.",
  //         "serve": "Serve very cold, straight up."
  //       },...
  //     ] */
  //   static async getDrinks() {
  //     const result = await axios.get(`${BASE_API_URL}/drinks`);
  //     return result.data;
  //   }

  //   /**Adds drink suggestion to database.
  //    * Input: 
  //     {
  //       "id": "martini",
  //       "name": "Martini",
  //       "description": "An ice-cold, refreshing classic.",
  //       "recipe": "Mix 3 parts vodka & 1 part dry vermouth.",
  //       "serve": "Serve very cold, straight up."
  //     }
  //    * Output: "drinkName" */
  //   static async addDrink(drinkSuggestion) {
  //     const result = await axios.post(`${BASE_API_URL}/drinks`, drinkSuggestion);
  //     return result.data.name;
  //   }

  //   /**Adds snack suggestion to database.
  //    * Input: 
  //       {
  //         "id": "nachos",
  //         "name": "Nachos",
  //         "description": "An American classic!",
  //         "recipe": "Cover expensive, organic tortilla chips with Cheez Whiz.",
  //         "serve": "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
  //       }
  //   * Output: "snackName" */
  //   static async addSnack(snackSuggestion) {
  //     const result = await axios.post(`${BASE_API_URL}/snacks`, snackSuggestion);
  //     return result.data.name;
  //   }

}

export default FrienderApi;