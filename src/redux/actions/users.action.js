export const GET_USERS_START = "GET_USERS_START";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

export const getUsersStart = () => {
  return {
    type: GET_USERS_START,
  };
};

export const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};

export const getUsersError = (error) => {
  return {
    type: GET_USERS_ERROR,
    payload: error,
  };
};
