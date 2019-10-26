import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {Styles} from "../user.assets/stylesheets/User.stylesheet";
import {userLogin,cancelLogin} from "../user.redux/User.actions";
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from '@material-ui/core/Divider';

class UserLogin extends Component {
    state = {
        username: "",
        password: "",
        submitted: false
    };


    handleLogin = e => {
        e.preventDefault();
        this.setState({submitted: true});
        const {username, password} = this.state;
        const {dispatch} = this.props;
        if (username && password) {
            dispatch(userLogin(username, password));
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
        const {type, name, value} = e.target;

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
        const {classes, loggedIn, loading,dispatch,errorMessege} = this.props;
        if (loggedIn) {
            this.props.history.push("/allvacations");
        }
        return (
            <div>
                <Card className={classes.LoginCard}>
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
                         {errorMessege &&   <p>Wrong Credentials! </p>}
                        </CardContent>
                        <CardActions>
                            <Button component={Link} to="/" onClick={()=>dispatch(cancelLogin())} variant="contained" size="small" color="secondary">
                                Cancel
                            </Button>
                            <Button
                                size="small"
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={loading}
                            >
                                Login
                                {loading && <CircularProgress size={24} className={classes.buttonProgress}/>}
                            </Button>
                        </CardActions>
                    </form>
                    <Divider variant="middle"/>
                    <CardActions>
                        <Button component={Link} to="/register" size="small" variant="contained" color="primary">
                            Register
                        </Button>
                    </CardActions>
                    <Divider variant="middle"/>

                    <CardActions>
                        <p>Admin Username: <strong>roman</strong></p>
                        <p> Password:<strong> secret</strong></p>
                    </CardActions>

                </Card>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.UserReducer.loggedIn,
        loading: state.UserReducer.loading,
        errorMessege: state.UserReducer.errorMessege
    };
};

export default connect(mapStateToProps)(withStyles(Styles)(UserLogin));
