import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusAction";
import axios from "axios";
import { awaitExpression } from "@babel/types";
import { EROFS } from "constants";

const apiUrl = "http://localhost:8000/players";

export const loadPlayesSuccess = players => ({
  type: types.LOAD_PLAYERS_SUCCESS,
  players
});
export const createPlayerSuccess = player => ({
  type: types.CREATE_PLAYER_SUCCESS,
  player
});
export const updatePlayerSuccess = player => ({
  type: types.UPDATE_PLAYER_SUCCESS,
  player
});
export const deletePlayerSuccess = player => ({
  type: types.DELETE_PLAYER_SUCCESS,
  player
});

export const loadPlayers = () => {
  return dispatch => {
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
};

export const savePlayer = player => {
  return (dispatch, getState) => {
    dispatch(beginApiCall());
    if (!player._id) {
      return axios
        .post(`${apiUrl}`, player)
        .then(savedPlayer => {
          dispatch(createPlayerSuccess(savedPlayer.data));
        })
        .catch(error => {
          dispatch(apiCallError(error));
          throw error;
        });
    } else {
      return axios
        .put(`${apiUrl}/${player._id}`, player)
        .then(savedPlayer => {
          dispatch(updatePlayerSuccess(savedPlayer.data));
        })
        .catch(error => {
          dispatch(apiCallError(error));
          throw error;
        });
    }
  };
};

export const deletePlayer = player => {
  return dispatch => {
    dispatch(beginApiCall);
    return axios
      .delete(`${apiUrl}/${player._id}`)
      .then(success => {
        dispatch(deletePlayerSuccess(player));
      })
      .catch(error => {
        dispatch(apiCallError(error));
      });
  };
};
