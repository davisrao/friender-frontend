import React from "react";

function UserCard({ userData }) {
    return (
        <i className="card col-2">
            <h3 className="card-title">{userData.first_name}</h3>
            <img className="card-img-top" src={userData.image} alt="profile pic"></img>
            <ul className="card-body">
                <li>Interest: {userData.interests}</li>
                <li>Hobbies: {userData.hobbies}</li>
            </ul>
        </i>

    );
}

export default UserCard;