import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import infoPopupReducer from "./infoPopup.reducer";
import todosReducer from "./todos.reducer";
import usersReducer from "./users.reducer";
import { createDialogsReducer } from "./dialogs.reducer";

export default combineReducers({
  auth: authReducer,
  infoPopup: infoPopupReducer,
  todos: todosReducer,
  users: usersReducer,

  ...createDialogsReducer(),
});
