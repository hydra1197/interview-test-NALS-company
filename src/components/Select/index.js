import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ children, ...rest }) => {
  return (
    <select className='form-control form-control-lg' { ...rest }>
      { children }
    </select>
  );
};

Select.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Select;