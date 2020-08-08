export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

export const setLoggedIn = (status) => ({
  type: "SET_LOGGED_IN",
  payload: status,
});

export const checkIsAdmin = (status) => ({
  type: "SET_IS_ADMIN",
  paylad: status,
});

export const loginError = (error) => ({
  type: "ERROR_OCCURED",
  payload: error,
});

export const setFirstName = (name) => ({
  type: "SET_FIRST_NAME",
  payload: name,
});

export const logOut = () => ({
  type: "LOG_OUT_USER",
});
