export const GET_TODOS_START = "GET_TODOS_START";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";

export const CREATE_TODO_START = "CREATE_TODO_START";
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";
export const CREATE_TODO_ERROR = "CREATE_TODO_ERROR";

export const UPDATE_TODO_START = "UPDATE_TODO_START";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_ERROR = "UPDATE_TODO_ERROR";

export const DELETE_TODO_START = "DELETE_TODO_START";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_ERROR = "DELETE_TODO_ERROR";

export const getTodosStart = () => ({
  type: GET_TODOS_START,
});

export const getTodosSuccess = ({ result: todos, ...rest }) => ({
  type: GET_TODOS_SUCCESS,
  payload: { todos, ...rest },
});

export const getTodosError = (error) => ({
  type: GET_TODOS_ERROR,
  payload: error,
});

export const createTodoStart = () => ({
  type: CREATE_TODO_START,
});

export const createTodoSuccess = (newTodo) => ({
  type: CREATE_TODO_SUCCESS,
  payload: newTodo,
});

export const createTodoError = (error) => ({
  type: CREATE_TODO_ERROR,
  payload: error,
});

export const updateTodoStart = () => ({
  type: UPDATE_TODO_START,
});

export const updateTodoSuccess = (updatedTodo) => ({
  type: UPDATE_TODO_SUCCESS,
  payload: updatedTodo,
});

export const updateTodoError = (error) => ({
  type: UPDATE_TODO_ERROR,
  payload: error,
});

export const deleteTodoStart = () => ({
  type: DELETE_TODO_START,
});

export const deleteTodoSuccess = (id) => ({
  type: DELETE_TODO_SUCCESS,
  payload: id,
});

export const deleteTodoError = (error) => ({
  type: DELETE_TODO_ERROR,
  payload: error,
});
