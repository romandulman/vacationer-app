import React, { Component } from "react";
import Header from "./components/layout/Header";
import Vecations from "./components/vacation-main/Vacations"
import "./stylesheets/fonts.css"

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
          </Router>

        </div>
    );
  }
}

export default App;