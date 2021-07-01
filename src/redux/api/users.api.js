import { FAKE_API } from "../../utils/Api";
import { getUsersError, getUsersStart, getUsersSuccess } from "../actions/users.action";

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
