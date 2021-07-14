export const GET_USERS_START = "GET_USERS_START";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

export const GET_USER_TODOS_START = "GET_USER_TODOS_START";
export const GET_USER_TODOS_SUCCESS = "GET_USER_TODOS_SUCCESS";
export const GET_USER_TODOS_ERROR = "GET_USER_TODOS_ERROR";

export const GET_USER_POSTS_START = "GET_USER_POSTS_START";
export const GET_USER_POSTS_SUCCESS = "GET_USER_POSTS_SUCCESS";
export const GET_USER_POSTS_ERROR = "GET_USER_POSTS_ERROR";

export const CLEAR_USER_DATA = "CLEAR_USER_DATA";

export const getUsersStarted = () => ({
  type: GET_USERS_START,
});

export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersError = (error) => ({
  type: GET_USERS_ERROR,
  payload: error,
});

export const getUserTodosStarted = () => ({
  type: GET_USER_TODOS_START,
});

export const getUserTodosSuccess = (todos) => ({
  type: GET_USER_TODOS_SUCCESS,
  payload: todos,
});

export const getUserTodosError = (error) => ({
  type: GET_USER_TODOS_ERROR,
  payload: error,
});

export const getUserPostsStarted = () => ({
  type: GET_USER_POSTS_START,
});

export const getUserPostsSuccess = (posts) => ({
  type: GET_USER_POSTS_SUCCESS,
  payload: posts,
});

export const getUserPostsError = (error) => ({
  type: GET_USER_POSTS_ERROR,
  payload: error,
});

export const clearUserData = () => ({
  type: CLEAR_USER_DATA,
});
