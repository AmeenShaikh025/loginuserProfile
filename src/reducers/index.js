const initialState = {
  login: false,
  isFetching: false,
  users: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return {
        login: false,
        users: [],
        isFetching: true
      };
    case "FETCHED_USER":
      return {
        login: false,
        users: action.data.users,
        isFetching: false
      };
    default:
      return state;
  }
};

export default authReducer;
