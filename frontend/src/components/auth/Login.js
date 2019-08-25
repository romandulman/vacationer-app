import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import  '../../stylesheets/main.css'
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
        showLogin: state.showLogin
    };
};

const mapDispachToProps = dispach => {
    return {
        LoginConfirm: profile =>
            dispach({ type: "IsLoggedIn", UserProfile: profile }),
        handleShowLogin: () => dispach({ type: "LOGIN" })
    };
};
class Login extends Component {

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


    render() {
        return (
            <div>
                <Card className="main">
                    <CardContent>

                        <TextField
                            autoFocus
                            margin="dense"
                            label="Username"
                            type="text"
                            onChange={e => {
                                this.userLogin.UserName = e.target.value;
                            }}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Comment"
                            type="text"

                            onChange={e => {
                                this.userLogin.Password = e.target.value;
                            }}

                            fullWidth
                        />
                    </CardContent>
                    <CardActions>
                        <Button onClick={this.handleView} color="primary">
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

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Login);