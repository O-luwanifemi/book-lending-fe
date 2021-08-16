import types from "../types"
import { config } from '../../config';
import axios from 'axios';

const { BASEURL } = config;

const getFavorite = (data) => ({
    type: types.GET_FAVORITES, 
    data: data
}); 

export const getFavoriteAsync = () => async (dispatch) => {
    try {
        const response = await axios.get(`${BASEURL}/favorites`);
        const data = await response.json();
        dispatch(getFavorite(data));        
    } catch (error) {
        console.log(error);
    }
};