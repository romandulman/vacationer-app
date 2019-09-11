import React, { Component } from "react";
import Header from "./components/layout/Header";
import Vecations from "./components/vacation-main/Vacations"
import "./stylesheets/fonts.css"
import Login from './components/auth/Login'
import Register from './components/auth/Register'
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
            <Route path="/allvications" component={Vecations} />
              <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
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
