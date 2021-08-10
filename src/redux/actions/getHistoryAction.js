import types from "../types"

const getHistory = (data) => ({
    type: types.GET_HISTORY, // thunk!
    data: data
}); // ACTION 

export const getHistoryAsync = () => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:7000/history');
        const data = await response.json();
        dispatch(getHistory(data));        
    } catch (error) {
        console.log(error);
    }
}; // THUNK