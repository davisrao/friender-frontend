import React, { useState, useContext, useEffect } from "react";
import FrienderApi from "./Api";
import UserContext from "./UserContext";
import UserCard from "./UserCard";

/** Order entering system before it ships.
 *
 * Props:
 * - none
 *
 * State:
 * - isConfirmed: true/false
 *
 * Customer -> Order -> OrderItem
 */
function PotentialMatches() {
  //get the potential matches that have the same zipcode as current user
  //potentialMatches.map to render cards
  //a new api route
  //a new back end route

  //button like/pass - both will remove person from potentialMatches
  //viewProfile link of entire card - show the user detail component
  //card shows thumbnail image, firstName, lastName
  const [errors, setErrors] = useState(null);
  const [potentialMatchesData, setPotentialMatchesData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userData = useContext(UserContext);

  useEffect(function fetchPotentialsWhenMounted() {
    async function fetchPotentials() {
      console.log("userData from Potential Matches: ", userData);
      let response = await FrienderApi.getPotentialMatches(userData.user.zip_code);
      setPotentialMatchesData(response.users);
      setIsLoading(false);
    }
    fetchPotentials();
  }, []);

  // try {

  // } catch (err) {
  //   setErrors(err);
  // }
  if (isLoading) {
    return <i>Loading...</i>
  };

  return (
    <div className="PotentialMatches row">
      {potentialMatchesData.map(p => <UserCard userData={p} />)}
    </div>
  );
}

export default PotentialMatches;