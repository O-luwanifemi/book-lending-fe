import types from "../../types"

const getBooks = (data) => ({
    type: types.GET_BOOKS,
    data: data
});

export const getBooksAsync = () => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:7000/books');
        const data = await response.json();
        dispatch(getBooks(data));  
    } catch (error) {
        console.log(error);
    }
};