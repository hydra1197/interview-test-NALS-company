import AxiosService from '../../services/Axios';
import { handleError } from '../Error/actions';
import { GET_USER_LIST_LOADING , SET_USER_LIST } from './types';

const getUserListLoading = status => ({
  type: GET_USER_LIST_LOADING,
  payload: { status },
});

const setUserList = data => ({
  type: SET_USER_LIST,
  payload: { data },
});


export const getUserList = () => async dispatch => {
  try {
    dispatch(getUserListLoading(true));

    const response = await AxiosService.get('users');

    dispatch(setUserList(response.data));
    dispatch(getUserListLoading(false));
  } catch (e) {
    dispatch(getUserListLoading(false));
    dispatch(handleError(e));
  }
};