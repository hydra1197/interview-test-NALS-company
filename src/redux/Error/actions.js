import { SET_ERROR_DATA, RESET_ERROR } from './types';

export const setErrorData = data => ({
  type: SET_ERROR_DATA,
  data,
});

export const handleError = error => dispatch => {
  if (error && error.response) {
    dispatch(setErrorData({
      status: error.response.status,
      message: error.response.data.message,
    }));
  }
};

export const resetError = () => ({
  type: RESET_ERROR,
});