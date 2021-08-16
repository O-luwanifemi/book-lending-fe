import types from '../types';

const initialState = {
  isAuthenticated: false,
  data: {},
  isLoading: false,
  error: {},
};

export const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
        isAuthenticated: true,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case types.LOGOUT_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {},
        isAuthenticated: false,
      };
    case types.LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
