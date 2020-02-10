import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ error, ...rest }) => {
  return (
    <>
      <input className='form-control form-control-lg' { ...rest } />
      { error && <span className='text-danger'>{ error }</span> }
    </>
  );
};

Input.propTypes = {
  error: PropTypes.string,
};

export default Input;