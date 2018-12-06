import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Cart from './components/cart';
import CheckOut from './components/checkout';
import UserDashBoard from './components/userdashboard';
import Signup from './components/signup';
import Login from './components/login';
import Order from './components/order';

 const Routes =() => (
     <BrowserRouter >
        <Switch>
            <Route exact path='/new' component={Home}></Route>
            <Route path='/new/order' component={Order}></Route>
            <Route path='/new/cart' component={Cart}></Route>
            <Route path='/new/checkout' component={CheckOut}></Route>
            <Route path='/new/userdash' component={UserDashBoard}></Route>
            <Route path='/new/signup' component={Signup}></Route>
            <Route path='/new/login' component={Login}></Route>
            
        </Switch>
    </BrowserRouter>
 )

 export default Routes;
