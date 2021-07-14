import { Button, TextField } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { STATUSES } from "../../constants";
import { createTodo, getTodos } from "../../redux/api/todos.api";
import { objectToQueryString, queryStringToObject } from "../../utils/queryStringHelpers";
import DialogDelete from "../DialogDelete/DialogDelete";
import Search from "../Search/Search";
import Skeleton from "../Skeleton/Skeleton";
import TodoItem from "../TodoItem/TodoItem";
import "./Todos.scss";

const Todos = () => {
  const { push } = useHistory();
  const { search } = useLocation();
  const dispatch = useDispatch();

  const { getTodosLoading, count, todos, totalPages, page } = useSelector(({ todos }) => todos);
  const { isOpened } = useSelector(({ DELETE_TODO_DIALOG }) => DELETE_TODO_DIALOG);

  const [newTodo, setNewTodo] = useState("");

  const queryParams = search ? queryStringToObject(search) : {};

  const inputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = async (e) => {
    e.preventDefault();

    dispatch(
      createTodo(
        {
          title: newTodo,
        },
        queryParams,
      ),
    );
    setNewTodo("");
  };

  function tabHandler(status) {
    push({
      search: objectToQueryString({ ...queryParams, page: "", status }),
    });
  }

  const paginationHandler = (e, page) => {
    push({ search: objectToQueryString({ ...queryParams, page }) });
  };

  useEffect(() => {
    dispatch(getTodos({ ...queryParams }));
  }, [dispatch, search]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="todos">
      <form className="todos__form" onSubmit={addTodo}>
        <TextField
          label="Your new todo..."
          type="text"
          size="small"
          name="todo"
          value={newTodo}
          onChange={inputChange}
          variant="outlined"
        />
        <Button variant="contained" type="submit" color="primary">
          Add todo
        </Button>
      </form>

      <Search />

      {getTodosLoading ? (
        <>
          <Skeleton height={70} />
          <Skeleton height={50} />
          <Skeleton height={50} />
        </>
      ) : (
        <>
          <div className="todos__filter">
            {STATUSES.map((status) => (
              <Button
                key={status}
                variant={status === queryStringToObject(search).status ? "contained" : "outlined"}
                color="primary"
                onClick={() => tabHandler(status)}
              >
                {status}
              </Button>
            ))}
          </div>

          <div className="todos__list">
            {count > 0 ? todos.map((todo) => <TodoItem key={todo._id} todo={todo} />) : <h2>No todos...</h2>}
          </div>

          {count > 3 ? (
            <div className="todos__pagination">
              <Pagination
                variant="outlined"
                shape="rounded"
                color="secondary"
                size="small"
                showFirstButton
                showLastButton
                count={totalPages}
                page={page ? page : 1}
                onChange={paginationHandler}
              />
            </div>
          ) : null}

          {isOpened ? <DialogDelete /> : null}
        </>
      )}
    </div>
  );
};
export default Todos;
