import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";

/** Component for navigating
 *
 * Props:
 * - handleLogout = function run on parent
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

  // function handleClick(){
  //   handleLogout();
  // }

  return (
    <div className="row">
        <nav className="Navigation bg-primary d-flex">
          <div className="mr-auto p-2">
            <NavLink exact to="/" >
              Friender Home
            </NavLink>
          </div>
          <div className="p-2">
            <NavLink exact to="/login" >
              Log In
            </NavLink>
          </div>
          <div className="p-2">
            <NavLink exact to="/signup" >
              Sign Up
            </NavLink>
          </div>
        </nav>
    </div>
  );
}

export default Navigation;