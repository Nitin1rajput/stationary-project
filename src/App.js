import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInSiginOut from './components/sign-in-sign-out/sign-in-sign-out.component'
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidCatch() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user})
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
    <div >
    <Header currentUser={this.state.currentUser} />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/signin' component={SignInSiginOut} />
    </Switch>
    </div>
  );
} 
}
export default App;
