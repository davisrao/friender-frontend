import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import UserSignupForm from "./UserSignupForm";
import Homepage from "./Homepage";
import MatchList from "./MatchList";


/** Routes for App
 * 
 * Props: 
 * - none
 * 
 * State: 
 * - none
 * 
 * App -> Routes -> {}
 */
function Routes({ registerUser, loginUser }) {
  console.log("* Routes");

  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/login">
        <LoginForm loginUser={loginUser} />
      </Route>
      <Route exact path="/signup">
        <UserSignupForm registerUser={registerUser} />
      </Route>
      <Route exact path="/matches">
        <MatchList/>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;