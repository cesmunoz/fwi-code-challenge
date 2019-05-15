import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function playersReducer(state = initialState.players, action) {
  switch (action.type) {
    case types.LOAD_PLAYERS_SUCCESS:
      return action.players;
    case types.CREATE_PLAYER:
      return [...state, { ...action.player }];
    case types.UPDATE_PLAYER_SUCCESS:
      return state.map(player =>
        player.id === action.player.id ? action.player : player
      );
    case types.DELETE_PLAYER_SUCCESS:
      return state.filter(player => player.id !== action.player.id);
    default:
      return state;
  }
}
