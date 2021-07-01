import { GET_USERS_ERROR, GET_USERS_START, GET_USERS_SUCCESS } from "../actions/users.action";

const initialState = {
  loading: false,
  users: null,
  getUsersError: null,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        getUsersError: action.payload,
      };

    default:
      return state;
  }
}
