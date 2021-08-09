import types from "../types"

const getShelf = (data) => ({
    type: types.GET_SHELF, // thunk!
    data: data
}); // ACTION 

export const getShelfAsync = () => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:7000/shelf/');
        const data = await response.json();
        dispatch(getShelf(data));        
    } catch (error) {
        console.log(error);
    }
}; // THUNK