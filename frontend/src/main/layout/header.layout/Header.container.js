import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {UserLogoutAction} from "../../../features";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import logoIco from "./assets/images/departure.png";
import {styles} from "./assets/stylesheets/Header.stylesheet";

class Header extends Component {

    render() {
        const {classes, loggedIn, dispatch, isAdmin,user} = this.props;
        return (
            <div>
                <AppBar position="static" className={classes.main}>
                    <Toolbar>
                        <div className={classes.title}>
                            <img
                                src={logoIco}
                                alt={"logo"}
                                height="40"
                                className={classes.Desklogo}
                            />
                            <span className={classes.logoText}>Vecationer</span>
                        </div>
                        {!loggedIn && (
                            <Button component={Link} to="/login">
                                Login
                            </Button>
                        )}
                        {loggedIn && (
                            <div>
                                <Button component={Link} to="/allvacations">Vacations</Button>
                                {isAdmin && (
                                    <Button onClick={this.handleMenu} component={Link} to="/admin">Admin Panel</Button>
                                )}
                                <Button color="primary" onClick={() => {dispatch(UserLogoutAction());}}>Logout</Button>
                            </div>
                        )}
                        {user &&  <div>Hi, {user}</div>}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.UserReducer.loggedIn,
        isAdmin: state.UserReducer.isAdmin,
        user:  state.UserReducer.loggedIn && state.UserReducer.user.profile.firstname
    };
};

export default connect(mapStateToProps)(withStyles(styles)(Header));
