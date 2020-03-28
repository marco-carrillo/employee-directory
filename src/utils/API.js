//********************************************************************************/
//  This API makes a call to the randomuser.me API to get 100 random users.      */
//  The number is totally arbitrarily, and just setup for demonstration purposes */
//********************************************************************************/

import axios from "axios";

function getRandomEmployees(){
  return axios.get("https://randomuser.me/api/?results=100&nat=us");
}

export default getRandomEmployees;
