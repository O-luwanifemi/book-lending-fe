import types from "../types"
import { config } from '../../config';
import axios from 'axios';

const { BASEURL } = config;

const getHistory = (data) => ({
    type: types.GET_HISTORY, // thunk!
    data: data
}); // ACTION 

export const getHistoryAsync = () => async (dispatch) => {
    try {
        const response = await axios.get(`${BASEURL}/history`);
        const data = await response.json();
        dispatch(getHistory(data));        
    } catch (error) {
        console.log(error);
    }
}; // THUNK