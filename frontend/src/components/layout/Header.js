
import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logoIco from '../../img/departure.png'
import MediaQuery from 'react-responsive';
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = {
    root: {
        width: '100%',

    },
    title:{
        flexGrow: 1,

    },
    flex: {
        flex: 1,
    },
    menuButton: {
      //float:"left"
    },
    logoText:{
        fontSize: 18,
        fontWeight: 700,
        color: '#212121',
        fontFamily: 'VarelaRound',
        marginRight:'30px',
        marginBottom:'1px'
    },

    d: {
        //  marginTop: "-10px",
        //  marginLeft: '-10px',
        backgroundColor: '#fff',
        //width: '100%',
        position: 'fixed',
        flexGrow: 1,

    },

    buttonmain: {
        fontSize: 15,
        fontWeight: 700,
        color: '#212121',
        fontFamily: 'VarelaRound',

    },

    buttonmainSM: {
        fontSize: 12,
        color: '#212121',
        fontFamily: 'VarelaRound',

    },

    buttonphone: {
        color: '#1565C0',
        fontSize: 16,
        fontWeight: 700,
        fontFamily: 'VarelaRound',

    },
    mobilogo: {
        marginTop: 8,
        marginLeft: -5,
    },
    Desklogo: {
        marginTop: 1,
        marginRight: "15px"

    },
    mobicall: {
        marginBottom: -2,
        color: '#1565C0',
        // fontSize: 18,
        //   fontFamily: 'VarelaRound',
        //  marginLeft: -70,
        //   marginRight: 20,
    },


    tooltipo: {
        size: 18,
        fontSize: 20,
    },

    menuItems: {
        direction: 'RTL',
        fontFamily: 'VarelaRound',
        fontSize: 15,

    },

    ul: {
        listStyleType: 'none',
        textAlign: 'right',

    },
    li: {
        marginBottom: '-8px',
        marginRight: '-13px',

    },
    contactLi: {
        fontSize: 15,
        color: '#1565C0',
        fontFamily: 'VarelaRound',
        marginBottom: '8px',
        fontWeight: 800,
    },
    dialogHeadline: {
        fontFamily: 'VarelaRound',
        color: '#1565C0',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 30,
    },

    PirteiDiv: {
        width: 250,

    },
    HeadingsStyle2: {
        fontFamily: 'VarelaRound',
        color: '#D50000',
        textDecoration: 'underline',

    },
    HeadingsStyle3: {
        fontFamily: 'VarelaRound',
        color: '#D50000',

    },
    diacont: {
        textAlign: 'center'
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
        open:'',
    };

    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({open:false})    };


     handleMenu = (event)=> {
         this.setState({open:true})
    }



    addGuestHandler = () => {
        this.props.isLoggedIn ? this.props.ShowModal() : this.props.LoginBtn();
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

        const {classes} = this.props;
        const {anchorEl} = this.state;
        return (

            <div>


                <AppBar position="static" className={classes.d}>
                    <Toolbar>

                      <div  className={classes.title}>

                    <img src={logoIco} alt={"logo"} height='40' className={classes.Desklogo}/>
                          <span className={classes.logoText}>Vecationer</span>
                        </div>


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
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={this.state.open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
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