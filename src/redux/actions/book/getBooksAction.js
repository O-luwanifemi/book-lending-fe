import types from "../../types"
// import axios from 'axios';
import { config } from '../../../config';

const { BASEURL } = config;

const getBooks = (data) => ({
    type: types.GET_BOOKS,
    data: data
});

export const getBooksAsync = () => async (dispatch) => {
    try {
        dispatch(getBooks())
        const response = await fetch(`${BASEURL}/books`);
        const data = await response.json();
        dispatch(getBooks(data));  
    } catch (error) {
        console.log(error);
    }
};