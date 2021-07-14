import {
  CREATE_TODO_ERROR,
  CREATE_TODO_START,
  CREATE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
  DELETE_TODO_START,
  DELETE_TODO_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODOS_START,
  GET_TODOS_SUCCESS,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_START,
  UPDATE_TODO_SUCCESS,
} from "../actions/todos.actions";

const initialState = {
  getTodosLoading: false,
  count: 0,
  totalPages: 0,
  todos: [],
  getTodosError: null,
  updateTodoLoading: false,
  updateTodoError: false,
  deleteTodoLoading: false,
  deleteTodoError: false,
};

export default function todosReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_TODOS_START:
      return {
        ...state,
        getTodosLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        getTodosLoading: false,
        getTodosError: null,
        ...payload,
      };
    case GET_TODOS_ERROR:
      return {
        ...state,
        getTodosLoading: false,
        getTodosError: true,
      };

    case CREATE_TODO_START:
      return {
        ...state,
        createTodoLoading: true,
      };
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        createTodoLoading: false,
        createTodoError: null,
      };
    case CREATE_TODO_ERROR:
      return {
        ...state,
        createTodoLoading: false,
        createTodoError: payload,
      };

    case UPDATE_TODO_START:
      return {
        ...state,
        updateTodoLoading: true,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        updateTodoLoading: false,
        updateTodoError: null,
        todos: state.todos.map((todo) => {
          if (todo._id === payload._id) return payload;
          return todo;
        }),
      };
    case UPDATE_TODO_ERROR:
      return {
        ...state,
        updateTodoLoading: false,
        updateTodoError: payload,
      };

    case DELETE_TODO_START:
      return {
        ...state,
        deleteTodoLoading: true,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        deleteTodoLoading: false,
        deleteTodoError: null,
      };
    case DELETE_TODO_ERROR:
      return {
        ...state,
        deleteTodoLoading: false,
        deleteTodoError: payload,
      };

    default:
      return state;
  }
}
