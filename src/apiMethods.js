/*
  Goto https://reqres.in/ for documentation on this api.
  
  If you haven't used axios, documentation here: https://github.com/axios/axios
  OR use any method / library you're comfortable with to perform the request(s).

  **** These stubs are just provided as a convienece, ****
  **** feel free to change whatever you like to accomplish the goal. ****
*/

import axios from "axios";

const baseUrl = "https://reqres.in/";

export const getUsers = () => {
  return axios
    .get(baseUrl + "api/users?page")
    .then(({ data }) => {
      console.log("getUsers", data);

      return data;
    })
    .catch((e) => console.assertlog(e));
};

// Bonus:
export const deleteUser = (userId) => {
  return axios
    .delete(baseUrl + `api/users/${userId}`)
    .then(() => {
      console.log(`User with id ${userId} deleted`);
      return userId;
    })
    .catch((e) => console.error(e));
};
