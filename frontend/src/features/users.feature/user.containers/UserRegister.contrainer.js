import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Styles } from "../user.assets/stylesheets/User.stylesheet";
import { namesCheck, userRegister } from "../user.redux/User.actions";

class UserRegister extends Component {
  state = {
    username: "",
    password: "",
    repassword: "",
    firstname: "",
    lastname: "",
    email:"",
    submitted: false
  };

  handleRegister = e => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password, repassword, firstname, lastname, email } = this.state;
    const { dispatch } = this.props;

    if(username.length<2 || password.length<2 || firstname.length<2 || lastname.length<2 ){
      return alert(' All fields are mandatory !');
    };
    if(password !== repassword){
      return alert(' The passwords are not match');
    };

    const newUser = {
      username: username,
      password: password,
      first_name: firstname,
      last_name:lastname,
      email: email
    };

    console.log(newUser);
    dispatch(userRegister(newUser))
  };

  onFieldChange = e => {
    const { type, name, value } = e.target;

    if (type === "text" || type === "email") {
      this.setState({
        [name]: value
      });
      //   this.checkIfNameTaken(this.state.username)
   //   namesCheck(this.state.username);
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

  };
};


export default connect(mapStateToProps)(withStyles(Styles)(UserRegister));
