export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_ERROR = "REGISTRATION_ERROR";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGOUT = "LOGOUT";

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const loginStart = () => {
  return {
    type: LOGIN_START,
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
};

export const registrationStart = () => {
  return {
    type: REGISTRATION_START,
  };
};

export const registrationSuccess = (user) => {
  return {
    type: REGISTRATION_SUCCESS,
    payload: user,
  };
};

export const registrationError = (error) => {
  return {
    type: REGISTRATION_ERROR,
    payload: error,
  };
};
