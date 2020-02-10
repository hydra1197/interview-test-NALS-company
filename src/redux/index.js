import { combineReducers } from 'redux';
import authReducer from './Auth/reducer';
import errorReducer from './Error/reducer';
import userReducer from './User/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  user: userReducer,
});

export default rootReducer;