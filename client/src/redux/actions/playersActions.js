import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusAction";
import axios from "axios";
import { awaitExpression } from "@babel/types";
import { EROFS } from "constants";

const apiUrl = "http://localhost:8000/players";

export function loadPlayesSuccess(players) {
  return { type: types.LOAD_PLAYERS_SUCCESS, players };
}

export function createPlayerSuccess(player) {
  return { type: types.CREATE_PLAYER_SUCCESS, player };
}

export function updatePlayerSuccess(player) {
  return { type: types.UPDATE_PLAYER_SUCCESS };
}

export function deletePlayerSuccess(player) {
  return { type: types.DELETE_PLAYER_SUCCESS, player };
}

export function loadPlayers() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return axios
      .get(`${apiUrl}`)
      .then(players => {
        dispatch(loadPlayesSuccess(players.data));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function savePlayer(player) {
  return function(dispatch, getState) {
    dispatch(beginApiCall());

    if (!player._id) {
      return axios
        .post(`${apiUrl}`, player)
        .then(savedPlayer => {
          dispatch(createPlayerSuccess(savedPlayer));
        })
        .catch(error => {
          dispatch(apiCallError(error));
          throw error;
        });
    } else {
      return axios
        .put(`${apiUrl}/${player.id}`, player)
        .then(savedPlayer => {
          dispatch(updatePlayerSuccess(savedPlayer));
        })
        .catch(error => {
          dispatch(apiCallError(error));
          throw error;
        });
    }
  };
}

export function deletePlayer(player) {
  return function(dispatch) {
    dispatch(beginApiCall);
    return axios
      .delete(`${apiUrl}/${player.id}`)
      .then(success => {
        // Do something
      })
      .catch(error => {
        dispatch(apiCallError(error));
      });
  };
}
