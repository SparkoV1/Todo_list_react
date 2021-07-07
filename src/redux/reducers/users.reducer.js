import {
  GET_USER_POSTS_ERROR,
  GET_USER_POSTS_START,
  GET_USER_POSTS_SUCCESS,
  GET_USERS_ERROR,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  CLEAR_USER_POSTS,
} from "../actions/users.action";

const initialState = {
  loading: false,
  users: null,
  getUsersError: null,

  postsLoading: false,
  posts: [],
  postsError: null,
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

    case GET_USER_POSTS_START:
      return {
        ...state,
        postsLoading: true,
      };
    case GET_USER_POSTS_SUCCESS:
      return {
        ...state,
        postsLoading: false,
        posts: action.payload,
      };
    case GET_USER_POSTS_ERROR:
      return {
        ...state,
        postsLoading: false,
        postsError: action.payload,
      };
    case CLEAR_USER_POSTS:
      return {
        ...state,
        posts: [],
      };

    default:
      return state;
  }
}
