import { useContext } from "react";
import UserContext from "./UserContext";

/** Renders the homepage
 * 
 * Props: 
 * - none
 * 
 * State: 
 * - none
 * 
 * Context:
 * -userData
 * 
 * Routes -> Homepage 
 */
function Homepage() {
    console.log("* Homepage");

    const userData = useContext(UserContext);
    console.log("userdata on homepage", userData);
    return (
        <div className="row min-vh-100 align-items-center">
            <div className="Homepage">
                <h1 className="Homepage-header">Friender!</h1>
                <p className="Homepage-tagline">
                    Meet some people</p>
                {userData && 
                <div>
                <h2>Welcome back, {userData.user.first_name}</h2>
                <img src={userData.user.image} alt="profile pic"></img>
                </div>}
            </div>
        </div>
    );
};

export default Homepage;