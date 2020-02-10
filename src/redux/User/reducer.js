import { GET_USER_LIST_LOADING, SET_USER_LIST } from './types';

const initialState = {
  isFetching: false,
  list: [],
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_USER_LIST_LOADING:
      return {
        ...state,
        isFetching: actions.payload.status,
      };
    case SET_USER_LIST:
      return {
        ...state,
        list: actions.payload.data,
      };
    default:
      return state;
  }
};

export default userReducer;