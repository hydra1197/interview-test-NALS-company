import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { REGISTER_PATH } from '../../../../constants/routePaths';
import { Input, Button } from '../../../../components';

const LoginForm = ({ loading, onSubmit }) => {
  const history = useHistory();
  const FormSchema = yup.object().shape({
    username: yup.string()
      .required(),
    password: yup.string()
      .required(),
  });

  return (
    <>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={FormSchema}
        onSubmit={values => {
          onSubmit(values, history);
        }}
      >
        {({ touched, errors }) => (
          <Form>
            <h4>{'Hello! let\'s get started'}</h4>
            <h6 className='font-weight-light'>Sign in to continue.</h6>
            <br />

            <div className='form-group'>
              <Field name='username'>
                {({ field }) => (
                  <Input
                    { ...field }
                    type='text'
                    placeholder='Username'
                    error={touched.username && errors.username}
                  />
                )}
              </Field>
            </div>
            <div className='form-group'>
              <Field name='password'>
                {({ field }) => (
                  <Input
                    { ...field }
                    type='password'
                    placeholder='Password'
                    error={touched.password && errors.password}
                  />
                )}
              </Field>
            </div>
            <div className='mt-3'>
              <Button className='btn-primary' loading={loading}>SIGN IN</Button>
            </div>
            <div className='my-2 d-flex justify-content-between align-items-center'>
              <div className='form-check'>
                <label className='form-check-label text-muted'>
                  <input type='checkbox' className='form-check-input' />
                  Keep me signed in
                  <i className='input-helper' />
                </label>
              </div>
              <a href='/' className='auth-link text-black'>Forgot password?</a>
            </div>
            <div className='mb-2'>
              <Button className='btn-facebook'>
                <i className='ti-facebook mr-2' />Connect using facebook
              </Button>
            </div>
            <div className='text-center mt-4 font-weight-light'>
              {'Don\'t have an account?'} <Link to={REGISTER_PATH} className='text-primary'>Create</Link>
            </div>
          </Form>
        ) }
      </Formik>
    </>
  );
};

LoginForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;