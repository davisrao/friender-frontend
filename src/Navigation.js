import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";
import "./Navigation.css";

/** Component for navigating
 *
 * Props:
 * - handleLogout => function run on parent
 *
 * State:
 * - none
 * 
 * Context:
 * - userData - an object like { username, firstName, lastName, email, isAdmin}

 *
 * App -> Navigation -> NavLink
 */
function Navigation({ handleLogout }) {
  console.log("* Navigation");

  const userData = useContext(UserContext);

  return (
    <div className="row">
      <nav className="Navigation bg-secondary d-flex">
        <span className="px-2">
          <NavLink exact to="/" >
            Friender Home
          </NavLink>
        </span>
        {userData && <span className="px-2">
          <NavLink exact to="/matches" >
            My Matches
          </NavLink>
        </span>
        }
        {!userData && <div>
          <span className="px-2">
            <NavLink exact to="/login" >
              Log In
            </NavLink>
          </span>
          <span className="px-2">
            <NavLink exact to="/signup" >
              Sign Up
            </NavLink>
          </span>
        </div>}
      </nav>
    </div>
  );
}

export default Navigation;