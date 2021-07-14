import { REAL_API } from "../../utils/Api";
import Logger from "../../utils/Logger";
import { objectToQueryString } from "../../utils/queryStringHelpers";
import {
  createTodoError,
  createTodoStart,
  createTodoSuccess,
  deleteTodoError,
  deleteTodoStart,
  deleteTodoSuccess,
  getTodosError,
  getTodosStart,
  getTodosSuccess,
  updateTodoError,
  updateTodoStart,
  updateTodoSuccess,
} from "../actions/todos.actions";

export const getTodos = ({ page, limit, status, search }) => {
  const queryParams = { page, limit, status, search };
  const queryString = objectToQueryString(queryParams);
  const apiUrl = `/todos/${queryString}`;

  return async (dispatch) => {
    dispatch(getTodosStart());

    try {
      const { data } = await REAL_API.get(apiUrl);
      dispatch(getTodosSuccess(data));
    } catch (error) {
      Logger.error(error);
      dispatch(getTodosError(error.response.data.message));
    }
  };
};

export const createTodo = (newTodo, queryParams) => {
  const apiUrl = "/todos";
  return async (dispatch) => {
    dispatch(createTodoStart());

    try {
      const { data } = await REAL_API.post(apiUrl, newTodo);
      Logger.info("data", data);
      dispatch(createTodoSuccess(data));
      dispatch(getTodos(queryParams));
    } catch (error) {
      Logger.error(error);
      dispatch(createTodoError(error.response.data.message));
    }
  };
};

export const updateTodo =
  ({ id, key, value }) =>
  async (dispatch) => {
    dispatch(updateTodoStart());

    // todo вызвав функцию getState, можно получить ВЕСЬ глобальный стейт(стор) в виде объекта
    // console.log(getState());

    try {
      const { data: updatedTodo } = await REAL_API.patch(`/todos/${id}/`, { [key]: value });
      dispatch(updateTodoSuccess(updatedTodo));
    } catch ({ response }) {
      dispatch(updateTodoError(response.data));
    }
  };

export const deleteTodo = (id, onSuccess, queryObject) => async (dispatch) => {
  dispatch(deleteTodoStart());

  try {
    await REAL_API.delete(`/todos/${id}/`);
    dispatch(deleteTodoSuccess(id));
    dispatch(getTodos(queryObject));
    onSuccess();
  } catch ({ response }) {
    dispatch(deleteTodoError(response.data));
  }
};
