import React, {useContext}from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus,faUserMinus } from '@fortawesome/free-solid-svg-icons'
import "./UserCard.css";
import UserContext from "./UserContext";

function UserCard({ addAction, cardUserData }) {
    
    const userData = useContext(UserContext);
    
    async function handleLike(){
        console.log("handle like ran!")
        console.log('CURR USER', userData)
        console.log("add action", {"currUser":userData.user.user_id,"likedUser": cardUserData.user_id,"Like":"Like"})
        await addAction(userData.user.user_id,cardUserData.user_id,"Like")
    };
        
    async function handlePass(){
        console.log("handle pass ran!")
        await addAction(userData.user_id,cardUserData.user_id,"Pass")
    };
    return (
        <i className="card col-2 m-3 d-inline-block justify-content-center shadow p-3 mb-5 bg-white rounded">
            <h3 className="card-title"><b>{cardUserData.first_name}</b></h3>
            <img className="card-img-top" src={cardUserData.image} alt="profile pic"></img>
            <ul className="card-body">
                <li className="card-list m-2"><b>Interests:</b> {cardUserData.interests}</li>
                <li className="card-list m-2"><b>Hobbies:</b> {cardUserData.hobbies}</li>
                <FontAwesomeIcon onClick={handleLike} className="card-icon fa-lg m-3" icon={faUserPlus} />
                <FontAwesomeIcon onClick={handlePass}className="card-icon fa-lg m-3" icon={faUserMinus} />
            </ul>
        </i>

    );
}

export default UserCard;