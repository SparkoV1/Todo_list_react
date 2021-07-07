import { FAKE_API } from "../../utils/Api";
import {
  getUserPostsError,
  getUserPostsStart,
  getUserPostsSuccess,
  getUsersError,
  getUsersStart,
  getUsersSuccess,
} from "../actions/users.action";

export const getUsers = () => {
  return (dispatch) => {
    dispatch(getUsersStart());

    FAKE_API.get("/users")
      .then((response) => {
        dispatch(getUsersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getUsersError(error));
      });
  };
};

export const getUserPosts = (id) => {
  return async (dispatch) => {
    dispatch(getUserPostsStart());
    try {
      const { data } = await FAKE_API.get(`/users/${id}/posts`);
      dispatch(getUserPostsSuccess(data));
    } catch (error) {
      dispatch(getUserPostsError(error));
    }
  };
};
