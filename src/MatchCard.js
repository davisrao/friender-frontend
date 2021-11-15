
import "./UserCard.css";

function MatchCard({cardUserData }) {
    
    return (
        <i className="card col-2 m-3 d-inline-block justify-content-center shadow p-3 mb-5 bg-white rounded">
            <h3 className="card-title"><b>{cardUserData.first_name}</b></h3>
            <img className="card-img-top" src={cardUserData.image} alt="profile pic"></img>
            <ul className="card-body">
                <li className="card-list m-2"><b>Interests:</b> {cardUserData.interests}</li>
                <li className="card-list m-2"><b>Hobbies:</b> {cardUserData.hobbies}</li>
                <li className="card-list m-2"><b>Zip Code:</b> {cardUserData.zip_code}</li>
                <button className="btn-secondary">Message</button>
            </ul>
        </i>

    );
}

export default MatchCard;