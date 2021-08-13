import { config } from '../../config';
import axios from 'axios';
import types from '../types';
import setAuthHeader from '../../utilities/setAuthHeader';

const { BASEURL } = config;

const signupStart = () => ({
  type: types.SIGN_UP_START,
});

const signupSuccess = (data) => ({
  type: types.SIGN_UP_SUCCESS,
  payload: data,
});

const signupFailure = (err) => ({
  type: types.SIGN_UP_FAILURE,
  payload: err,
});

export const loginSuccess = (data) => ({
  type: types.LOGIN_SUCCESS,
  payload: data,
});

export const signupAsync = (data) => async (dispatch) => {
  // you may validate function here
  try {
    dispatch(signupStart());
    const response = await axios.post(`${BASEURL}/register`, data);
    
    localStorage.setItem('token', response.data.data.token.split(" ")[1]);
    setAuthHeader(response.data.data.token);
    dispatch(loginSuccess(response.data));
    
    dispatch(signupSuccess(response.data)); // from backend API
    
  } catch (err) {
    dispatch(signupFailure(err.response));
  }
};
