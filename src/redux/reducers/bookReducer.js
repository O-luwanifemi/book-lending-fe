import types from '../types';

const initialState = {
    data: [],
};

const bookReducer = (state=initialState, action) => {
    const {type} = action;
    switch(type) {
        case types.GET_BOOKS:
            return {...state, data:action.data};
        case types.CREATE_BOOK:
            return {...state, data:action.data};
        case types.EDIT_BOOK:
            return {...state, data:action.data};
        case types.DELETE_BOOK:
            return {...state, data:action.data};
        default:
            return state;
    }
};

export default bookReducer;