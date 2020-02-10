import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_PATH } from '../constants/routePaths';

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const token = localStorage.getItem('token');

  return (
    <Route
      { ...rest }
      render={props => {
        return (
          token
            ? <Layout>
              <Component { ...props } />
            </Layout>
            : <Redirect
              to={{
                pathname: LOGIN_PATH,
                state: { from: props.location },
              }}
            />
        );

      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  layout: PropTypes.object.isRequired,
  props: PropTypes.object,
};

export default PrivateRoute;