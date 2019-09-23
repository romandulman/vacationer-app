import React, { Component } from "react";
import { Header }  from '../../main';
import { UserLogin , UserRegister } from '../../features'
import { history } from '../../helpers';
import {VacItemComponent} from '../../features'
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
              <br/>
              <br/>
              <br/>
              <br/>
            <Route path="/">
              <Redirect to="/allvacations" />
            </Route>
              <Route path="/allvacations" component={ VacItemComponent } />
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
