import { combineReducers } from "redux";
import LoginReducer from "./Login/LoginReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
});

export default rootReducer;
