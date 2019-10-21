import React, { Component } from "react";
import Header from "../layout/header.layout/Header.container";
import { VacContainer, UserLogin, UserRegister } from "../../features";
import { PrivateRoute } from "../common/private-route.common/PrivateRoute";
import { AdminPrivateRoute } from "../common/private-route.common/AdminPrivateRoute";
import { AdminContainer } from "../../features";
//import { history } from '../../helpers';
//import "./stylesheets/fonts.css"
import Spinner from "../common/spinner/Spinner";
//import Register from '../../components/user'
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="App">
        <Router>
          <Header />
          <br />
          {loading && <Spinner />}
          <PrivateRoute exact path="/">
            <Redirect to="/allvacations" />
          </PrivateRoute>
          <PrivateRoute exact path="/allvacations" component={VacContainer} />
           <Route path="/login" component={UserLogin} />
          <Route path="/register" component={UserRegister} />
          <AdminPrivateRoute exact path="/admin" component={AdminContainer} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  //  loading: state.UserReducer.loading
  };
};

export default connect(mapStateToProps)(App);
