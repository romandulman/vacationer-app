import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Styles} from "../user.assets/stylesheets/User.stylesheet";
import {namesCheck, userRegister} from "../user.redux/User.actions";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

class UserRegister extends Component {

    state = {
        username: "",
        password: "",
        repassword: "",
        firstname: "",
        lastname: "",
        email: "",
        submitted: false
    };

    handleRegister = e => {
        e.preventDefault();
        this.setState({submitted: true});
        const {username, password, repassword, firstname, lastname, email} = this.state;
        const {dispatch} = this.props;

        if (username.length < 2 || password.length < 2 || firstname.length < 2 || lastname.length < 2) {
            return alert(' All fields are mandatory !');
        }
        if (password !== repassword) {
            return alert(' The passwords are not match');
        }

        const newUser = {
            username: username,
            password: password,
            first_name: firstname,
            last_name: lastname,
            email: email
        };

        dispatch(userRegister(newUser))
    };

    onFieldChange = e => {
        const {type, name, value} = e.target;
        if (type === "text" || type === "email") {
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
        const {classes, loading} = this.props;
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
                                name="email"
                                onChange={e => {
                                    this.onFieldChange(e);
                                }}
                                fullWidth
                            />
                        </CardContent>
                        <CardActions>
                            <Button component={Link} to="/login" size="small" variant="contained" color="secondary">
                                Cancel
                            </Button>
                            <Button
                                size="small"
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={loading}
                            >
                                Register
                                {loading && <CircularProgress size={24} className={classes.buttonProgress}/>}
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
        loading: state.UserReducer.loading,
    };
};


export default connect(mapStateToProps)(withStyles(Styles)(UserRegister));
