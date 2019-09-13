import React, { Component } from "react";
import   {Header}  from '../../components/layout';
import { UserLogin , UserRegister } from '../../components/user'
//import Vacations from '../../components/vacations'
//import "./stylesheets/fonts.css"
//import  {UserLoginCont}  from '../../components/user'
//import Register from '../../components/user'
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Router>

            <Header />
            <Route path="/">
              <Redirect to="/allvications" />
            </Route>
           <Route path="/login" component={ UserLogin } />
            <Route path="/register" component={ UserRegister } />
          </Router>
        </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
