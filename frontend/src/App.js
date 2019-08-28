import React, { Component } from "react";
import Header from "./components/layout/Header";
import Vecations from "./components/vacation-main/Vacations"
import "./stylesheets/fonts.css"
import Login from './components/auth/Login'
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

          </Router>

        </div>
    );
  }
}

export default App;