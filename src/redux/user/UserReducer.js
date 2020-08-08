const INITIAL_STATE = {
  currentUser: null,
  loggedIn: false,
  isAdmin: false,
  loginError: null,
  firstName: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "SET_LOGGED_IN":
      return {
        ...state,
        loggedIn: action.payload,
      };
    case "SET_IS_ADMIN":
      return {
        ...state,
        isAdmin: action.payload,
      };
    case "ERROR_OCCURED":
      return {
        ...state,
        loginError: action.payload,
      };
    case "SET_FIRST_NAME":
      return {
        ...state,
        firstName: action.payload,
      };
    case "LOG_OUT_USER":
      return {
        currentUser: null,
        loggedIn: false,
        isAdmin: false,
        loginError: null,
        firstName: null,
      };
    default:
      return state;
  }
};

export default userReducer;
