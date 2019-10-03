import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button";
import {Styles} from '../user.assets/stylesheets/User.stylesheet';
import { NamesCheck, UserRegisterAction } from '../user.redux/User.actions';

class UserRegister extends Component {
  state = {
    username: "",
    password: "",
    repassword: "",
    firstname: "",
    lastname: "",
    submitted: false
  };

  handleRegister = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password, repassword, firstname, lastname } = this.state;
    const { dispatch } = this.props;
  };

  onFieldChange = e => {
    const { type, name, value } = e.target;

    if (type === "text") {
      this.setState({
        [name]: value
      });
      //   this.checkIfNameTaken(this.state.username)
      NamesCheck(this.state.username);
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
        <Card className={classes.RegisterCard}>
          <form onSubmit={this.handleRegister}>
            <CardContent>
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
              <TextField
                autoFocus
                margin="dense"
                label="Retype Password"
                name="repassword"
                type="password"
                onChange={e => {
                  this.onFieldChange(e);
                }}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                label="First Name"
                name="firstname"
                type="text"
                onChange={e => {
                  this.onFieldChange(e);
                }}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                label="Last Name"
                name="lastname"
                type="text"
                onChange={e => {
                  this.onFieldChange(e);
                }}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                label="Email"
                type="email"
                onChange={e => {
                  this.onFieldChange(e);
                }}
                fullWidth
              />
            </CardContent>
            <CardActions>
              <Button component={Link} to="/login" color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Register
              </Button>
            </CardActions>
          </form>
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

const mapDispachToProps = dispach => {
    return {
        LoginConfirm: profile =>
            dispach({ type: "IsLoggedIn", UserProfile: profile }),
        handleShowLogin: () => dispach({ type: "LOGIN" })
    };
};

export default connect(mapStateToProps,mapDispachToProps)(withStyles(Styles)(UserRegister));

