import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logoIco from '../../assets/images/departure.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {styles} from './Header.stylesheet'
import './Header.stylesheet.css'

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
    ShowLogin: () => dispach({ type: "SHOWLOGIN" })
  };
};

class Header extends Component {
  state = {
    anchorEl: null,
    open: ""
  };


  handleMenu = () => {
      (this.state.open) ? this.setState({ open: false }):  this.setState({ open: true });
  };

  componentDidMount() {

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
              >
                login
              </Button>
            )}
            {!this.props.isLoggedIn &&   <Button color="primary" component={Link} to ="/login">Login</Button>
            }
            {this.props.isLoggedIn && (
              <div>
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
                  <MenuItem onClick={this.handleMenu} component={Link} to="/profile">Profile</MenuItem>
                  <MenuItem onClick={this.handleMenu} component={Link} to="/admin">Admin Panel</MenuItem>  // not forget to do check in the server if auth - when url is click on the url bar
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}



const connectedHeader = connect(mapStateToProps,mapDispachToProps)(withStyles(styles)(Header));
export { connectedHeader as Header };
