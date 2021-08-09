import types from '../types';

const initialState = {
  data: {},
  isLoading: false,
  error: {},
};
export const signupReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SIGN_UP_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case types.SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default signupReducer;
