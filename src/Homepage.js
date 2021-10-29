import { useContext } from "react";
import PotentialMatches from "./PotentialMatches";
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
                {!userData &&
                    <div>
                        <h1 className="Homepage-header">Friender!</h1>
                        <p className="Homepage-tagline">
                            Meet some people</p>
                    </div>}
                {userData && <div className="row">
                    <h1>Find Some Matches</h1>
                    <PotentialMatches />
                </div>}
            </div>
        </div>
    );
};

export default Homepage;