import store from "../store";

//action
const FETCH_USER = "FETCH_USER";
const FETCHED_USER = "FETCHED_USER";
//const LOGIN_USER = "LOGIN_USER";

//action creator (function)
export const fetch_user = () => {
  return {
    type: FETCH_USER
  };
};

export const fetched_user = users => {
  return {
    type: FETCHED_USER,
    data: users
  };
};

// const login_user = () => {
//   return {
//     type: LOGIN_USER
//   };
// };

//Asynch call

export const fetchUser = () => {
  store.dispatch(fetch_user());

  return async dispatch => {
    //fetch call
    return await fetch("https://panorbit.in/api/users.json")
      .then(data => data.json())
      .then(data => {
        if (!data) {
          throw new Error("No user");
        } else dispatch(fetched_user(data));
      });
  };
};
