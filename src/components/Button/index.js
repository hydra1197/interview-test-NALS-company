import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className, loading, ...rest }) => {
  return (
    <button className={`btn btn-block auth-form-btn ${className}`} { ...rest } disabled={loading}>
      { loading ? 'Waiting ...' : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  className: PropTypes.string,
  loading: PropTypes.bool,
};

export default Button;