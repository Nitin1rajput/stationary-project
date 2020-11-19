import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInSiginOut from './components/sign-in-sign-out/sign-in-sign-out.component'
function App() {
  return (
    <div >
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/signin' component={SignInSiginOut} />
    </Switch>
    </div>
  );
} 

export default App;
