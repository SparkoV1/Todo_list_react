import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { STATUSES } from "../../constants";
import { toggleGlobalDialog } from "../../redux/actions/dialogs.actions";
import { updateTodo } from "../../redux/api/todos.api";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const [isEditorActive, setIsEditorActive] = useState(false);
  const [editingText, setEditingText] = useState("");

  const editTodo = (id, title) => {
    setEditingText(title);
    setIsEditorActive((prevState) => !prevState);

    if (isEditorActive) {
      dispatch(updateTodo({ id, key: "title", value: editingText }));
    }
  };

  function changeStatus(e, id) {
    dispatch(updateTodo({ id, key: "status", value: e.target.value }));
  }

  function changeTodoText(e) {
    setEditingText(e.target.value);
  }

  function saveTodoByClickEnter(e, id, title) {
    if (e.key === "Enter") {
      editTodo(id, title);
    }
  }

  return (
    <>
      <div className="todos__item" key={todo._id}>
        {isEditorActive ? (
          <TextField
            autoFocus
            onKeyUp={(e) => saveTodoByClickEnter(e, todo._id, todo.title)}
            onChange={changeTodoText}
            value={editingText}
          />
        ) : (
          <p className="todos__text">{todo.title}</p>
        )}
        <div className="todos__actions">
          <FormControl className="todos__select">
            <InputLabel>Status.</InputLabel>
            <Select
              value={todo.status}
              onChange={function (e) {
                return changeStatus(e, todo._id);
              }}
            >
              {STATUSES.map((status) => (
                <MenuItem value={status} key={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            startIcon={<Edit />}
            variant="contained"
            color="primary"
            size="small"
            onClick={() => editTodo(todo._id, todo.title)}
          >
            Edit
          </Button>
          <Button
            className="todos__delete"
            startIcon={<Delete />}
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => dispatch(toggleGlobalDialog("DELETE_TODO_DIALOG", true, { todoId: todo._id }))}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
