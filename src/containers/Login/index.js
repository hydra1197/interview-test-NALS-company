import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LoginForm } from '../../components';
import { login } from '../../redux/Auth/actions';

const Login = ({ login, loading }) => {
  return <LoginForm onSubmit={login} loading={loading} />;
};

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.auth.isSubmitting,
});

const actionCreators = {
  login,
};

export default connect(
  mapStateToProps,
  actionCreators
)(Login);