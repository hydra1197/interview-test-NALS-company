import { SET_ERROR_DATA, RESET_ERROR } from './types';

const initialState = {
  status: null,
  message: null,
};

const error = (state = initialState, action) => {
  switch (action.type) {
  case SET_ERROR_DATA:
    return {
      ...state,
      status: action.data.status,
      message: action.data.message,
    };
  case RESET_ERROR:
    return {
      ...state,
      status: null,
      message: null,
    };
  default:
    return { ...state };
  }
};

export default error;