import types from "../types"
import { config } from '../../config';
import axios from 'axios';

const { BASEURL } = config;

const getShelf = (data) => ({
    type: types.GET_SHELF, // thunk!
    data: data
}); // ACTION 

export const getShelfAsync = () => async (dispatch) => {
    try {
        const response = await axios.get(`${BASEURL}/shelf`);
        const data = await response.json();
        dispatch(getShelf(data));        
    } catch (error) {
        console.log(error);
    }
}; // THUNK