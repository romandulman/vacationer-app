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
import CircularProgress from '@material-ui/core/CircularProgress';

import { Styles } from "../../../user.assets/stylesheets/User.stylesheet";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import {cancelDialog,submitEditVac,submitNewVac} from "../admin.redux/Admin.actions";

class AddEditVac extends Component {
  state = {
    showMe: false,
    opType: "",
    description: "",
    destination: "",
    fromDate: new Date("2014-08-18T21:11:54"),
    toDate: new Date("2014-08-18T21:11:54"),
    price: "",
    image: "",
    imageFile:null
  };

  componentDidMount() {
    const { dispatch } = this.props;
    //dispatch(UserLogoutAction)
  }


  resetForm = () => {
    this.setState({
      description: "",
      destination: "",
      fromDate: new Date("2014-08-18T21:11:54"),
      toDate: new Date("2014-08-18T21:11:54"),
      image: "",
      price: "",
      imageFile:null
    });
  };

  onFieldChange = e => {
    const {type, name, value, files} = e.target;

    if (type === "text") {
      this.setState({
        [name]: value
      });
    }

    if (type === "file") {
      this.setState({
        [name]: e.target.files[0]
      });
    }
    console.log(this.state.imageFile)

  };


  handleFromDateChange = date => {
    this.setState({
      fromDate: date
    });
  };
  handleToDateChange = date => {
    this.setState({
      toDate: date
    });
  };

  handleClose = () => {
    const {showDialog, dispatch} = this.props;

    dispatch(cancelDialog());
    this.resetForm()
  };

  submitForm=(e)=>{
    const {showDialog, dispatch} = this.props;
    e.preventDefault();
    const imageFile = new FormData();
    imageFile.append('description' ,this.state.description);
    imageFile.append('destination' ,this.state.destination);
    imageFile.append('fromDate' ,this.state.fromDate);
    imageFile.append('toDate' ,this.state.toDate);
    imageFile.append('price' ,this.state.price);
    imageFile.append('imageFile', this.state.imageFile);

    const data ={
      description:this.state.description,
      destination:this.state.destination,
      fromDate:this.state.fromDate,
      toDate: this.state.toDate,
      price: this.state.price,
      imageFile: this.state.imageFile
    };

    if(showDialog.opType==='Edit'){
     console.log(data)
    }

    if(showDialog.opType==='Add'){
      dispatch(submitNewVac(imageFile))
    }
  }


  render() {
    const { classes, vacData, showDialog, dispatch,loading } = this.props;
    const { toDate, fromDate, opType,showMe } = this.state;

    return (
      <Dialog
        open={showDialog.show}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          <DialogTitle id="alert-dialog-title">{showDialog.opType}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Description"
              name="description"
              type="text"
              value={showDialog.opType==='Edit' ? vacData.description : this.state.description}
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
              value={showDialog.opType==='Edit' ? vacData.destination : this.state.destination}
              onChange={e => {
                this.onFieldChange(e);
              }}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              label="Price"
              name="price"
              type="text"
              value={showDialog.opType==='Edit' ? vacData.price : this.state.price}
              onChange={e => {
                this.onFieldChange(e);
              }}
              fullWidth
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              From
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                name="fromDate"
                value={showDialog.opType==='Edit' ? vacData.from : this.state.fromDate}
                onChange={this.handleFromDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
              To:
              <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  name="toDate"
                  value={showDialog.opType==='Edit' ? vacData.to : this.state.toDate}
                  onChange={this.handleToDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
              />
            </MuiPickersUtilsProvider>
            );
            <label>Image:</label>
            {showDialog.opType==='Edit' ? <img src={`http://localhost:8080/uploads/${vacData.image}`}/> : <input type="file" name="imageFile" onChange={e=>{this.onFieldChange(e)}} />}
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>Cancel</Button>
            <Button variant="contained" color="primary" onClick={e=>{this.submitForm(e)}} color="primary">
              {showDialog.opType}
             {loading && <CircularProgress size={24} /> }
            </Button>
          </DialogActions>
        <hr/>
      </Dialog>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.AdminReducer.data)
  return {
    vacData: state.AdminReducer.data,
    showDialog: state.AdminReducer.showDialog,
    loading: state.AdminReducer.loading
  };
};

export default connect(mapStateToProps)(withStyles(Styles)(AddEditVac));
