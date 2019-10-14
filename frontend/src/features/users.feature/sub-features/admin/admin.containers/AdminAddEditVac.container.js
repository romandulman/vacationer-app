import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Styles } from "../../../user.assets/stylesheets/User.stylesheet";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import{cancelDialog} from "../admin.redux/Admin.actions";

class AddEditVac extends Component {
  state = {
    showMe: false,
    opType: "",
    description: "",
    destination: "",
    fromDate: new Date("2014-08-18T21:11:54"),
    toDate: new Date("2014-08-18T21:11:54"),
    image: "",
    price: ""
  };

  componentDidMount() {
    const { dispatch } = this.props;
    //dispatch(UserLogoutAction)
  }

  handleLogin = e => {
    e.preventDefault();
    /*    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password ) {
      dispatch(UserLoginAction(username, password));
      this.resetForm();
    } else {
      !username ? alert("Username missing") : alert("Password missing");
    }*/
  };

  resetForm = () => {
    this.setState({
      description: "",
      destination: "",
      fromDate: "",
      toDate: "",
      image: "",
      price: ""
    });
  };

  onFieldChange = e => {
    const { type, name, value } = e.target;

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
  handleToDateChange = date => {
    this.setState({
      toDate: date
    });
  };

  handleClose = () => {
    this.setState({
      showMe: false
    });
  };

  submitForm=()=>{
    const {showDialog, dispatch} = this.props;
   // alert(showDialog.opType)
    if(showDialog.opType==='Edit'){
      alert(showDialog.opType)
    }
    if(showDialog.opType==='Add'){
      alert(showDialog.opType)
    }
  }


  render() {
    const { classes, vacData, showDialog, dispatch } = this.props;
    const { toDate, fromDate, opType,showMe } = this.state;

    return (
      <Dialog
        open={showDialog.show}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={this.handleLogin}>
          <DialogTitle id="alert-dialog-title">{opType}</DialogTitle>

          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Description"
              name="description"
              type="text"
              value={vacData&&vacData.description}
              onChange={e => {
                this.onFieldChange(e);
              }}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              label="Destination"
              name="destination"
              type="text"
              onChange={e => {
                this.onFieldChange(e);
              }}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              label="Price"
              name="destination"
              type="text"
              onChange={e => {
                this.onFieldChange(e);
              }}
              fullWidth
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={fromDate}
                onChange={this.handleToDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </MuiPickersUtilsProvider>
            );
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={()=>dispatch(cancelDialog())}>Cancel</Button>
            <Button onClick={this.submitForm} color="primary">
              {showDialog.opType}
            </Button>
          </DialogActions>
        </form>
        <hr />
      </Dialog>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.AdminReducer.data)
  return {
    vacData: state.AdminReducer.data,
    showDialog: state.AdminReducer.showDialog
  };
};

export default connect(mapStateToProps)(withStyles(Styles)(AddEditVac));
