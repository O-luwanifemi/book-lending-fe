import { config } from '../../config';
import axios from 'axios';
import types from '../types';

const { BASEURL } = config;

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (data) => ({
  type: types.LOGIN_SUCCESS,
  payload: data,
});

const loginFailure = (err) => ({
  type: types.LOGIN_FAILURE,
  payload: err,
});

export const loginAsync = (data) => async (dispatch) => {
  // you may validate function here
  try {
    dispatch(loginStart());
    const response = await axios.post(`${BASEURL}/login`, data);
    dispatch(loginSuccess(response.data)); // from backend API
    
  } catch (err) {
    dispatch(loginFailure(err.response));
  }
};
