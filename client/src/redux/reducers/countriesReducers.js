import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function countriesReducer(
  state = initialState.countries,
  action
) {
  switch (action.type) {
    case types.LOAD_COUNTRIES_SUCCESS:
      return action.countries;
    default:
      return state;
  }
}
