import React from 'react';
import { Fragment } from 'react';
import {BrowserRouter as Router, Link, Route, Switch, useHistory, withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import {connect, Provider} from 'react-redux'
import store from './store'
import Task from './components/Task'
import SignIn from './components/SignIn'


function App() {

  return (
    <Provider store = {store}>


    <Fragment>
    
    <Router>
    <Navbar/>
      <Switch>
        
        <Route exact path='/home'>  <Home history={useHistory} /></Route>
        <Route exact path='/task'><Task history={useHistory} /></Route>
        <Route exact path='/'><SignIn history={useHistory} /></Route> 
        
      </Switch>
      
    </Router>
  </Fragment>
  </Provider>
  );
}

export default App ;
