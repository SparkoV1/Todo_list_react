export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_ERROR = "REGISTRATION_ERROR";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const loginStarted = () => ({
  type: LOGIN_START,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  payload: error,
});

export const registrationStarted = () => ({
  type: REGISTRATION_START,
});

export const registrationSuccess = (user) => ({
  type: REGISTRATION_SUCCESS,
  payload: user,
});

export const registrationError = (error) => ({
  type: REGISTRATION_ERROR,
  payload: error,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutError = (error) => ({
  type: LOGOUT_ERROR,
  payload: error,
});
