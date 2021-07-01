import { combineReducers } from "redux";
import usersReducer from "./users.reducer";
import testReducer from "./test.reducer";

export default combineReducers({
  test: testReducer,
  users: usersReducer,
});
