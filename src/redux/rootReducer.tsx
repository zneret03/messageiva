import { combineReducers } from "redux";
import DashboardReducer from "./Dashboard/DashboardReducer";
import LoginReducer from "./Login/LoginReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  rightSidebar: DashboardReducer,
});

export default rootReducer;
