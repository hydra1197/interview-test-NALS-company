import { AxiosService, ToastifyService } from '../../services';
import { handleError } from '../Error/actions';
import { SUBMIT_FORM_AUTH_LOADING , SET_TOKEN, CLEAR_AUTH_DATA } from './types';
import { LOGIN_PATH, USER_LIST_PATH } from '../../constants/routePaths';

const submitFormAuthLoading = status => ({
  type: SUBMIT_FORM_AUTH_LOADING,
  payload: { status },
});

const setToken = token => ({
  type: SET_TOKEN,
  payload: { token },
});


export const login = (data, history) => async dispatch => {
  try {
    dispatch(submitFormAuthLoading(true));

    const response = await AxiosService.post('login', data);
    AxiosService.setAuthorization(response.data.token);
    ToastifyService.success('Logged in successfully');

    dispatch(setToken(response.data.token));
    dispatch(submitFormAuthLoading(false));

    localStorage.setItem('token', response.data.token);
    history.push(USER_LIST_PATH);
  } catch (e) {
    dispatch(submitFormAuthLoading(false));
    dispatch(handleError(e));
  }
};

const clearAuthData = () => ({
  type: CLEAR_AUTH_DATA,
});

export const logout = history => dispatch => {
  try {
    dispatch(clearAuthData());
    localStorage.clear();
    history.push(LOGIN_PATH);
  } catch (e) {
    dispatch(submitFormAuthLoading(false));
  }
};