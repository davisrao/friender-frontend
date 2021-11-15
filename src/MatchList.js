import { useState, useContext, useEffect } from "react";
import FrienderApi from "./Api";
import UserContext from "./UserContext";
import MatchCard from "./MatchCard";

/** List of Confirmed Matches!
 *
 * Props:
 * - none
 *
 * State:
 * - isConfirmed: true/false
 *
 * Customer -> Order -> OrderItem
 */
function MatchList() {

  const [errors, setErrors] = useState(null);
  const [matchData, setMatchData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userData = useContext(UserContext);

  console.log({errors,matchData,isLoading,userData})

  useEffect(function fetchMatchesWhenMounted() {
    async function fetchMatches() {
      let response = await FrienderApi.getAllMatches( userData.user.user_id);
      setMatchData(response.users);
      setIsLoading(false);
    }
    fetchMatches();
  }, [isLoading]);

  if (isLoading) {
    return <i>Loading...</i>
  };

  return (
    <div className="MatchList row justify-content-center">
      {matchData.length === 0
      ?<h1 className="mt-4">No Matches Yet. Keep Friending and Good Luck!</h1>
      :matchData.map((match,idx) => <MatchCard key={idx} cardUserData={match} />)
      }
    </div>
  );
}

export default MatchList;