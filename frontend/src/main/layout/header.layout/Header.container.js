import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logoIco from "./assets/images/departure.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { styles } from "./assets/stylesheets/Header.stylesheet";
import "./assets/stylesheets/header.stylesheet.css";
import { UserLogoutAction } from "../../../features";

class Header extends Component {
  state = {
    anchorEl: null,
    open: ""
  };

  handleMenu = () => {
    this.state.open
      ? this.setState({ open: false })
      : this.setState({ open: true });
  };

  componentDidMount() {}

  render() {
    const { classes, loggedIn, dispatch, isAdmin } = this.props;
    const { anchorEl } = this.state;

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
                <Button component={Link} to="/allvacations">
                  Vacations
                </Button>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="primary"
                  className="app-bar-menu-btn"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={this.state.open}
                  onClose={this.handleMenu}
                >
                  <MenuItem
                    onClick={this.handleMenu}
                    component={Link}
                    to="/profile"
                  >
                    Profile
                  </MenuItem>

              { isAdmin   &&  <MenuItem
                    onClick={this.handleMenu}
                    component={Link}
                    to="/admin"
                  >
                    Admin Panel
                  </MenuItem> }

                  <MenuItem
                      onClick={()=>{dispatch(UserLogoutAction())}}
                  >
                    Logout
                  </MenuItem>


                </Menu>
              </div>
            )}

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.UserReducer.loggedIn,
    isAdmin: state.UserReducer.isAdmin
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Header));
