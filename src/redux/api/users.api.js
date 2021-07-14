import { FAKE_API } from "../../utils/Api";
import Logger from "../../utils/Logger";
import {
  getUsersStarted,
  getUsersSuccess,
  getUsersError,
  getUserTodosStarted,
  getUserTodosSuccess,
  getUserTodosError,
  getUserPostsStarted,
  getUserPostsSuccess,
  getUserPostsError,
} from "../actions/users.actions";

export const getUsers = () => {
  const apiUrl = "/users";
  return (dispatch) => {
    dispatch(getUsersStarted());

    FAKE_API.get(apiUrl).then(
      (response) => {
        dispatch(getUsersSuccess(response.data));
      },
      (error) => {
        Logger.info(error);
        dispatch(getUsersError(error.message));
      },
    );
  };
};

export const getUserTodos = (userId) => {
  const apiUrl = `/users/${userId}/todos`;
  return (dispatch) => {
    dispatch(getUserTodosStarted());

    FAKE_API.get(apiUrl).then(
      (response) => {
        dispatch(getUserTodosSuccess(response.data));
      },
      (error) => {
        Logger.info(error);
        dispatch(getUserTodosError(error.message));
      },
    );
  };
};

export const getUserPosts = (userId) => {
  const apiUrl = `/users/${userId}/posts`;
  return (dispatch) => {
    dispatch(getUserPostsStarted());

    FAKE_API.get(apiUrl).then(
      (response) => {
        dispatch(getUserPostsSuccess(response.data));
      },
      (error) => {
        Logger.info(error);
        dispatch(getUserPostsError(error.message));
      },
    );
  };
};
