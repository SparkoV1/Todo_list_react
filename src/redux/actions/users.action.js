export const GET_USERS_START = "GET_USERS_START";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

export const GET_USER_POSTS_START = "GET_USER_POSTS_START";
export const GET_USER_POSTS_SUCCESS = "GET_USER_POSTS_SUCCESS";
export const GET_USER_POSTS_ERROR = "GET_USER_POSTS_ERROR";

export const CLEAR_USER_POSTS = "CLEAR_USER_POSTS";

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

export const getUserPostsStart = () => {
  return {
    type: GET_USER_POSTS_START,
  };
};

export const getUserPostsSuccess = (posts) => {
  return {
    type: GET_USER_POSTS_SUCCESS,
    payload: posts,
  };
};

export const getUserPostsError = (error) => {
  return {
    type: GET_USER_POSTS_ERROR,
    payload: error,
  };
};

export const clearUserPosts = () => {
  return {
    type: CLEAR_USER_POSTS,
  };
};
