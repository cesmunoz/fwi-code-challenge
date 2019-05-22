import { combineReducers } from "redux";
import players from "./playersReducers";
import countries from "./countriesReducers";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  countries,
  players,
  apiCallsInProgress
});

export default rootReducer;
