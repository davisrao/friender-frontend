import React, { useState, useEffect } from 'react';
import './App.css';
import FrienderApi from "./Api"
import jwt from "jsonwebtoken";
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import UserContext from './UserContext';
import Navigation from './Navigation';
import "bootstrap/dist/css/bootstrap.css";
import useLocalStorage from "./useLocalStorage";

export const TOKEN_STORAGE_ID = "jobly-token";


/** App component for rendering friender app
 *
 * props:
 * - none
 * 
 * State:
 * - userData: data of current user -- set to context
 * - token: token assigned when login happens
 * - isLoading: true / false
 * 
 * Homepage => Routes => {LoginForm}
 */

function App() {
  //piece of state that is the token
  // when token changes, update user data in context

  const [userData, setUserData] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [isLoading, setIsLoading] = useState(true);

  console.log("* App", { userData, token });

  /** Effect to update value of user data upon change of token
   * will run on login, signup, and data edit successes
   */
  useEffect(function updateUserDataOnTokenChange() {
    async function updateUserData() {
      if (token) {
        console.log("decoded token!", jwt.decode(token))
        let userId = jwt.decode(token).sub.user_id
        console.log("id in the useEffect on token change", userId)
        FrienderApi.token = token;
        const userResponse = await FrienderApi.getById(userId);
        setUserData(userResponse);
        console.log("USE EFFECT", {userResponse, userData, token})
      };
      setIsLoading(false);
    }
    updateUserData();
  }, [token]);


  /** function to register user based on form data
   */
  async function registerUser(formData) {
    //takes form data
    //makes API  call to sign up the user
    //returns error if doesn't work
    const resp = await FrienderApi.registerUser(formData);
    setToken(resp);
    console.log(resp);
  }

  /** function to login a user based on form data
   */
  async function loginUser(formData) {
    //takes form data
    //makes API  call to sign up the user
    //returns error if doesn't work
    const resp = await FrienderApi.login(formData);
    setToken(resp);
  }



  /** Sets token to be an empty string
 * 
*/
  async function handleLogout() {
    setToken("");
    setUserData(null);
  }

  if (isLoading) {
    return <i>Loading...</i>
  };

  return (
    <div className="App container-fluid">
      <BrowserRouter>
        <UserContext.Provider value={userData}>
          <Navigation handleLogout={handleLogout} />
          <Routes
            loginUser={loginUser}
            registerUser={registerUser}
          />
        </UserContext.Provider>
      </BrowserRouter>

    </div >
  );
}

export default App;
