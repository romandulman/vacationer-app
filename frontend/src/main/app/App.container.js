import React, { Component } from "react";
import  Header  from '../layout/header.layout/Header.container';
import {VacContainer, UserLogin , UserRegister } from '../../features'
import {PrivateRoute} from '../common/private-route.common/PrivateRoute'
//import { history } from '../../helpers';
//import "./stylesheets/fonts.css"

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
              <br/>
              <br/>
              <br/>
              <br/>
            <PrivateRoute exact path="/">
              <Redirect to="/allvacations" />
            </PrivateRoute >

              <PrivateRoute exact path="/allvacations" component={VacContainer} />

             {/* <Route path="/allvacations" component={ VacContainer } />*/}
              <Route path="/login" component={ UserLogin } />
            <Route path="/register" component={ UserRegister } />

            <br/>
            <br/>
        <br/>


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

export default connect(mapStateToProps)(App);
