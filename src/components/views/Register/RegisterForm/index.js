import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_PATH } from '../../../../constants/routePaths';
import { Input, Select, Button } from '../../../../components';

const RegisterForm = () => {
  return (
    <>
      <h4>New here?</h4>
      <h6 className='font-weight-light'>Signing up is easy. It only takes a few steps</h6>
      <form className='pt-3'>
        <div className='form-group'>
          <Input type='text' placeholder='Username' />
        </div>
        <div className='form-group'>
          <Input type='email' placeholder='Email' />
        </div>
        <div className='form-group'>
          <Select>
            <option>Country</option>
            <option>United States of America</option>
            <option>United Kingdom</option>
            <option>India</option>
            <option>Germany</option>
            <option>Argentina</option>
          </Select>
        </div>
        <div className='form-group'>
          <Input type='password' placeholder='Password' />
        </div>
        <div className='mb-4'>
          <div className='form-check'>
            <label className='form-check-label text-muted'>
              <input type='checkbox' className='form-check-input' />
              I agree to all Terms & Conditions
              <i className='input-helper' />
            </label>
          </div>
        </div>
        <div className='mt-3'>
          <Button className='btn-primary'>SIGN UP</Button>
        </div>
        <div className='text-center mt-4 font-weight-light'>
          Already have an account? <Link to={LOGIN_PATH} className='text-primary'>Login</Link>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;