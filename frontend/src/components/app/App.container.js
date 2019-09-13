import React, { Component } from "react";
import { Header }  from '../../components/layout';
import { UserLogin , UserRegister } from '../../components/user'
import { history } from '../../helpers';

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
{this.props.b}
            <Header />
            <Route path="/">
              <Redirect to="/allvications" />
            </Route>
           <Route path="/login" component={ UserLogin } />
            <Route path="/register" component={ UserRegister } />

            <br/>
            <br/>
        <br/>

            <h1>{this.props.b}</h1>

          </Router>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        b: state.data
    }
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
