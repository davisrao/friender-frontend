import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserSignupForm from './UserSignupForm';
import FrienderApi from "./Api"
import LoginForm from './LoginForm';

function App() {

  async function registerUser(formData) {
    //takes form data
    //makes API  call to sign up the user
    //returns error if doesn't work
    const resp = await FrienderApi.registerUser(formData);

    console.log(resp);
  }

  async function loginUser(formData) {
    //takes form data
    //makes API  call to sign up the user
    //returns error if doesn't work
    const resp = await FrienderApi.login(formData);

    // console.log(resp);
  }



  return (
    <div className="App">
      {/* <UserSignupForm registerUser={registerUser} /> */}
      <LoginForm loginUser={loginUser} />
    </div>
  );
}

export default App;
