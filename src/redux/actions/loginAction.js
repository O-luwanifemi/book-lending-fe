import { config } from '../../config';
import axios from 'axios';
import types from '../types';
import setAuthHeader from '../../utilities/setAuthHeader';
// import setResponseInfo from '../../utilities/setResponseInfo';

const { BASEURL } = config;

const loginStart = () => ({
  type: types.LOGIN_START,
});

export const loginSuccess = (data) => ({
  type: types.LOGIN_SUCCESS,
  payload: data,
});

const loginFailure = (err) => ({
  type: types.LOGIN_FAILURE,
  payload: err,
});

// FOR WHEN USER LOGS OUT
const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = (data) => ({
  type: types.LOGOUT_SUCCESS,
  payload: data,
});

const logoutFailure = (err) => ({
  type: types.LOGOUT_FAILURE,
  payload: err,
});



export const loginAsync = (data) => async (dispatch) => {
  // you may add validate function here
  try {
    dispatch(loginStart());

    const response = await axios.post(`${BASEURL}/login`, data);
    localStorage.setItem('token', response.data.data.token.split(" ")[1]);
    
    setAuthHeader(response.data.data.token);
    // setResponseInfo({
    //   stastus: response.data.data.status,
    //   message: response.data.data.message
    // });

    dispatch(loginSuccess(response.data));
    
  } catch (err) {
    dispatch(loginFailure(err.response));
  }
};

export const logoutAsync = () => async (dispatch) => {
  try {
    dispatch(logoutStart());

    const response = await axios.get(`${BASEURL}/logout`);
    localStorage.removeItem("token");

    setAuthHeader("");

    dispatch(logoutSuccess(response.data));
  } catch (err) {
    dispatch(logoutFailure(err.response));
  }
};