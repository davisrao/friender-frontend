import React, { useState, useContext, useEffect } from "react";
import FrienderApi from "./Api";
import UserContext from "./UserContext";
import UserCard from "./UserCard";

/** Page for potential matches to show.
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

  console.log({errors,potentialMatchesData,isLoading,userData})

  /**function to add action to DB */
  async function addAction(actingUserId,targetedUserId,action){
    const response = await FrienderApi.addAction(actingUserId,targetedUserId,action);
    setIsLoading(true);
  }


  useEffect(function fetchPotentialsWhenMounted() {
    async function fetchPotentials() {
      console.log("userData from Potential Matches: ", userData);
      let response = await FrienderApi.getPotentialMatches( userData.user.user_id,userData.user.zip_code);
      setPotentialMatchesData(response.users);
      setIsLoading(false);
    }
    fetchPotentials();
  }, [isLoading]);

  if (isLoading) {
    return <i>Loading...</i>
  };

  return (
    <div className="PotentialMatches row justify-content-center">
      {potentialMatchesData[0] === undefined
      ?<h1 className="mt-4">Out of potential friends. Come back soon!</h1>
      :<div>
      <h1 className="mt-4">Find Some Matches in Your Zip!</h1>
      <UserCard addAction={addAction} cardUserData={potentialMatchesData[0]} />
      </div> 
      }
    </div>
  );
}

export default PotentialMatches;