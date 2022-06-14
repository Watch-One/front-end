import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from "../pages/Login/Login";
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Register from '../pages/Login/Register';

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/login'
                component={Login}
            />
            <Route
                path='/Register'
                component={Register}
            />
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
                
            />
            <Route
                path='/'
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routes;
