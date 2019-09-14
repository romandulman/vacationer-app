import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserLoginAction } from './User.actions';
import {GoogleLogin}  from './User.services'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Styles } from "./User.stylesheet";

class UserLoginContainer extends Component {
  state = {
    username: "",
    password: "",
    submitted: false
  };

  handleLogin = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(UserLoginAction(username, password));
      this.resetForm();
    } else {
      !username ? alert("Username missing") : alert("Password missing");
    }
  };

  resetForm = () => {
    this.setState({
      Username: "",
      Password: ""
    });
  };

  onFieldChange = e => {
    const { type, name, value } = e.target;

    if (type === "text") {
      this.setState({
        [name]: value
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.LoginCard}>
          {" "}
          <form onSubmit={this.handleLogin}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Login
              </Typography>

              <TextField
                autoFocus
                margin="dense"
                label="Username"
                name="username"
                type="text"
                onChange={e => {
                  this.onFieldChange(e);
                }}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                label="Password"
                name="password"
                type="password"
                onChange={e => {
                  this.onFieldChange(e);
                }}
                fullWidth
              />
            </CardContent>
            <CardActions>
              <Button component={Link} to="/" color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Login
              </Button>
            </CardActions>
          </form>
          <hr />
          <CardActions>
            <Button onClick={GoogleLogin} color="primary">
              Login With Google
            </Button>
            <Button component={Link} to="/register" color="primary">
              Register
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}


const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
    };

};

/*
const mapDispachToProps = dispach => {
    return {
        LoginConfirm: profile =>
            dispach({ type: "IsLoggedIn", UserProfile: profile }),
        handleShowLogin: () => dispach({ type: "LOGIN" })
    };
};
*/

const connectedUserLogin = connect(mapStateToProps)(withStyles(Styles)(UserLoginContainer));
export { connectedUserLogin as UserLoginContainer };


