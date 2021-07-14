import {
  CLEAR_USER_DATA,
  GET_USER_POSTS_ERROR,
  GET_USER_POSTS_START,
  GET_USER_POSTS_SUCCESS,
  GET_USER_TODOS_ERROR,
  GET_USER_TODOS_START,
  GET_USER_TODOS_SUCCESS,
  GET_USERS_ERROR,
  GET_USERS_START,
  GET_USERS_SUCCESS,
} from "../actions/users.actions";

const initialState = {
  loading: false,
  users: [],
  error: null,
  todosLoading: false,
  todos: [],
  todosErrors: null,
  postsLoading: false,
  posts: [],
  postsErrors: null,
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
        error: null,
        users: action.payload,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case GET_USER_TODOS_START:
      return {
        ...state,
        todosLoading: true,
      };
    case GET_USER_TODOS_SUCCESS:
      return {
        ...state,
        todosLoading: false,
        todosErrors: null,
        todos: action.payload,
      };
    case GET_USER_TODOS_ERROR:
      return {
        ...state,
        todosLoading: false,
        todosErrors: action.payload.error,
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
        postsErrors: null,
        posts: action.payload,
      };
    case GET_USER_POSTS_ERROR:
      return {
        ...state,
        postsLoading: false,
        postsErrors: action.payload.error,
      };
    case CLEAR_USER_DATA:
      return {
        ...state,
        posts: [],
        todos: [],
      };

    default:
      return state;
  }
}
