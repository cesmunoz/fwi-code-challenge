import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusAction";
import axios from "axios";
import config from "../../config";

const apiUrl = `${config.API_BASE_URL}/countries`;

export const loadCountriesSuccess = countries => ({
  type: types.LOAD_COUNTRIES_SUCCESS,
  countries
});

export const loadCountries = () => {
  return dispatch => {
    dispatch(beginApiCall());
    return axios
      .get(`${apiUrl}`)
      .then(countries => {
        dispatch(loadCountriesSuccess(countries.data));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
};
