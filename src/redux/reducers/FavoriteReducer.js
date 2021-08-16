import types from '../types';

const initialState = {
    data: [],
};

const FavoriteReducer = (state=initialState, action) => {
    const {type} = action;
    switch(type) {
        case types.GET_FAVORITES:
            return {...state, data:action.data};
        case types.ADD_TO_FAVORITES:
            return {...state, data:action.data};
        case types.REMOVE_FROM_FAVORITES:
            return {...state, data:action.data};
        default:
            return state;
    }
};

export default FavoriteReducer;