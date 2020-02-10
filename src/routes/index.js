import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { LOGIN_PATH, REGISTER_PATH, USER_LIST_PATH } from '../constants/routePaths';
import { Login, Register, UserList } from '../containers';
import { AuthLayout, MainLayout } from '../components';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path={LOGIN_PATH} exact component={Login} layout={AuthLayout} />
        <PublicRoute path={REGISTER_PATH} exact component={Register} layout={AuthLayout} />
        <PrivateRoute path={USER_LIST_PATH} exact component={UserList} layout={MainLayout} />
        {/*<Route component={Page404} />*/}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;