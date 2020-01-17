import React from 'react';
import './App.css';
import {Router,Switch,Route} from 'react-router-dom'
import history from './history'
import Loginpage from './modules/loginpage'
import { SignupPage } from './modules/signup_page';
import CreatorsPage from './modules/creators_page';
import HomePage from './modules/home_page';
import AdminsPage from './modules/admins_page';
import CartPage from './modules/cart_page';


function App() {
  return (
    <Router history={history}>
    <Switch>
      <Route index={1} exact path={'/'} component={Loginpage}/>
      <Route index={1} exact ={true} path={'/signup'} component={SignupPage}/>
      <Route index={1} exact={true} path={'/creator'} component={CreatorsPage}/>
      <Route index={1} exact={true} path={'/home'} component={HomePage}/>
      <Route index={1} exact={true} path={'/admin'} component={AdminsPage}/>
      <Route index={1} exact={true} path={'/cart'} component={CartPage}/>
      </Switch>
    </Router> 
  );
}

export default App;
