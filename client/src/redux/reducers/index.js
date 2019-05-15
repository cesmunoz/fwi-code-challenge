import { combineReducers } from "redux";
import players from "./playersReducers";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  players,
  apiCallsInProgress
});

export default rootReducer;
