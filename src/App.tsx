import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserSignupForm from './UserSignupForm';
import FrienderApi from "./Api"

function App() {

async function registerUser(formData){
  //takes form data
  //makes API  call to sign up the user
  //returns error if doesn't work
    const resp = await FrienderApi.registerUser(formData);
    console.log(resp)
}



  return (
    <div className="App">
      <UserSignupForm registerUser={registerUser}/>
    </div>
  );
}

export default App;
