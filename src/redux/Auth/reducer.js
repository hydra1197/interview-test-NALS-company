import { SUBMIT_FORM_AUTH_LOADING, SET_TOKEN, CLEAR_AUTH_DATA } from './types';

const initialState = {
  isSubmitting: false,
  token: null,
};

const authReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SUBMIT_FORM_AUTH_LOADING:
      return {
        ...state,
        isSubmitting: actions.payload.status,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: actions.payload.token,
      };
    case CLEAR_AUTH_DATA:
      return {
        ...state,
        isSubmitting: false,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;