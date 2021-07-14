import { Button, Dialog, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import "./DialogDelete.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { toggleGlobalDialog } from "../../redux/actions/dialogs.actions";
import { deleteTodo } from "../../redux/api/todos.api";
import { queryStringToObject } from "../../utils/queryStringHelpers";

const DialogDelete = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();

  const { isOpened, data } = useSelector(({ DELETE_TODO_DIALOG }) => DELETE_TODO_DIALOG);
  const queryObject = search ? queryStringToObject(search) : {};

  function deleteTodoLocal() {
    dispatch(deleteTodo(data.todoId, close, queryObject));
  }

  function close() {
    dispatch(toggleGlobalDialog("DELETE_TODO_DIALOG", false));
  }

  function submitDeleting({ key }) {
    if (key === "Enter") {
      deleteTodoLocal();
    }
  }

  return (
    <Dialog open={isOpened} className="dialog-delete" onClose={close} onKeyUp={submitDeleting}>
      <div className="dialog-delete__box">
        <IconButton size="small" onClick={close} className="dialog-delete__close">
          <Close />
        </IconButton>
        Are you sure you want to delete TODO
        <div className="dialog-delete__actions">
          <Button color="primary" variant="outlined" onClick={close}>
            No
          </Button>
          <Button color="secondary" variant="contained" onClick={deleteTodoLocal}>
            Delete
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogDelete;
