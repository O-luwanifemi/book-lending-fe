import types from '../types';

const initialState = {
    data: [],
};

const shelfReducer = (state=initialState, action) => {
    const {type} = action;
    switch(type) {
        case types.GET_SHELF:
            return {...state, data:action.data};
        case types.ADD_TO_SHELF:
            return {...state, data:action.data};
        case types.REMOVE_FROM_SHELF:
            return {...state, data:action.data};
        default:
            return state;
    }
};

export default shelfReducer;