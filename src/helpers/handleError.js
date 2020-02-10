import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../redux/Auth/actions';
import { resetError } from '../redux/Error/actions';

const handleError = ({ history, error, logout, resetError }) => {
  if (
    error.status === 401
    || (error.status === 400 && error.message === 'PERMISSION_DENIED')
    || (error.status === 400 && error.message === 'AUTHENTICATION_FAILED')
    || (error.status === 400 && error.message === 'YOU_ACCOUNT_LOCKER')
    || (error.status === 400 && error.message === 'invalid algorithm')
    || (error.status === 400 && error.message === 'invalid signature')
    || (error.status === 400 && error.message === 'jwt malformed')
    || (error.status === 400 && error.message === 'Invalid Token')
  ) {
    logout(history);
    resetError();
  }

  return false;
};

const mapStateToProps = state => ({
  error: state.error,
});

const actionCreators = {
  logout,
  resetError,
};

export default connect(
  mapStateToProps,
  actionCreators
)(withRouter(handleError));