import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import  '../../stylesheets/main.css'
import { connect } from "react-redux";


const styles = {
    card: {

        width: '300px',
        // height: '150px',
        position: 'fixed', /* or absolute */
        top: '50%',
        left: '50%',
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"

    }

};
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

class UserRegisterContainer extends Component {

    userLogin = {
        UserName: "",
        Password: ""
    };

    handleLogin = () => {
        fetch("/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: this.userLogin.UserName,
                password: this.userLogin.Password
            })
        })
            .then(res => res.json())
            .then(user => {
                this.props.LoginConfirm(user.profile);
            });
    };

    checkIfNameTaken=(name)=>{
        console.log(name)
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>

                        <TextField
                            autoFocus
                            margin="dense"
                            label="Username"
                            type="text"
                            onChange={e => {
                                // this.userLogin.UserName = e.target.value;
                                this.checkIfNameTaken(e.target.value)
                            }}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Password"
                            type="password"

                            onChange={e => {
                                this.userLogin.Password = e.target.value;
                            }}

                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Name"
                            type="text"

                            onChange={e => {
                                this.userLogin.Password = e.target.value;
                            }}

                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Last Name"
                            type="text"

                            onChange={e => {
                                this.userLogin.Password = e.target.value;
                            }}

                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Email"
                            type="email"

                            onChange={e => {
                                this.userLogin.Password = e.target.value;
                            }}

                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Retype Password"
                            type="password"

                            onChange={e => {
                                this.userLogin.Password = e.target.value;
                            }}

                            fullWidth
                        />
                    </CardContent>
                    <CardActions>
                        <Button component={Link} to="/login" color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleLogin} color="primary">
                            Login
                        </Button>
                    </CardActions>
                </Card>

            </div>
        );
    }
}

const connectedUserRegister = connect(mapStateToProps,mapDispachToProps)(withStyles(styles)(UserRegisterContainer));
export { connectedUserRegister as UserRegisterContainer };
