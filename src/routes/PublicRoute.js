import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      { ...rest }
      render={props => {
        return (
          <Layout>
            <Component { ...props } />
          </Layout>
        );
      }
      }
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.object.isRequired
  ]),
  layout: PropTypes.func.isRequired,
};

export default PublicRoute;