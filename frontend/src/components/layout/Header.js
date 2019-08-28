
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logoIco from "../../img/departure.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";

const styles = {
  main: {
    backgroundColor: "#fff",
    position: "fixed",
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },

  logoText: {
    fontSize: 18,
    fontWeight: 700,
    color: "#212121",
    fontFamily: "VarelaRound",
    marginRight: "30px",
    marginBottom: "1px"
  },

  Desklogo: {
    marginTop: 1,
    marginRight: "15px"
  },

  tooltipo: {
    size: 18,
    fontSize: 20
  }
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    UserProfile: state.UserProfile
  };
};

const mapDispachToProps = dispach => {
  return {
    LoginConfirm: profile =>
      dispach({ type: "IsLoggedIn", UserProfile: profile }),
    LoginBtn: () => dispach({ type: "LOGIN" }),
    ShowModal: () => dispach({ type: "SHOWMODAL" })
  };
};

class Header extends Component {
  state = {
    anchorEl: null,
    open: ""
  };


  handleMenu = () => {
   // this.setState({ open: true });
      (this.state.open) ? this.setState({ open: false }):  this.setState({ open: true });


  };



  componentDidMount() {
    const handleErrors = response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    };

    fetch("/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(handleErrors)
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(profileRes => {
        this.props.LoginConfirm(profileRes.profile);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { classes } = this.props;
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

            {this.props.isLoggedIn && (
              <Button
                component={Link}
                to="/contact"
                className={classes.buttonmain}
              >
                login
              </Button>
            )}
            {!this.props.isLoggedIn &&   <Button color="primary">Login</Button>
            }
            {this.props.isLoggedIn && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="primary"
                  className={classes.menuButton}
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
                  <MenuItem onClick={this.handleMenu} component={Link} to="/profile">Profile</MenuItem>
                  <MenuItem onClick={this.handleMenu} component={Link} to="/admin">Admin Panel</MenuItem>  // not forget to do check in the server if auth - when url is clicket on the url bar
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispachToProps
)(withStyles(styles)(Header));