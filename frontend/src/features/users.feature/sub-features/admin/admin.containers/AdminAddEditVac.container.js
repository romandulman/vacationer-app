import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";
import {connect} from "react-redux";
import {cancelDialog, submitNewVac, submitUpdate} from "../admin.redux/Admin.actions";
import {Styles} from "../../../user.assets/stylesheets/User.stylesheet";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import CircularProgress from '@material-ui/core/CircularProgress';


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
        imageFile: null
    };

    componentDidMount() {
        const {showDialog,vacData} = this.props;

        if (showDialog.opType === 'Edit') {
            console.log(vacData.to,vacData.from)
            this.setState({
                description: vacData.description,
                destination: vacData.destination,
                fromDate: vacData.to,
                toDate: vacData.from,
                price: vacData.price,
                image: vacData.image,
            })
        }
    }


    resetForm = () => {
        this.setState({
            description: "",
            destination: "",
            fromDate: new Date("2014-08-18T21:11:54"),
            toDate: new Date("2014-08-18T21:11:54"),
            image: "",
            price: "",
            imageFile: null
        });
    };

    onFieldChange = e => {
        const {type, name, value, files} = e.target;

        if (type === "text" || type === "number" ) {
            this.setState({
                [name]: value
            });
        }

        if (type === "file") {
            this.setState({
                [name]: e.target.files[0]
            });
        }
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
        const {dispatch} = this.props;
        dispatch(cancelDialog());
        this.resetForm()
    };

    submitForm = (e) => {
        const {showDialog,dispatch,vacData} = this.props;
        const {description,destination,fromDate,toDate,price,imageFile,image} = this.state;
        e.preventDefault();
        if(description.length<1 || destination.length<1 || fromDate.length<1 || toDate.length<1 || price.length<1 || imageFile.length<1){
            return alert('All fields are mandatory')
        }
        const formData = new FormData();
        formData.append('description', description);
        formData.append('destination', destination);
        formData.append('fromDate', fromDate);
        formData.append('toDate', toDate);
        formData.append('price', price);
        formData.append('imageFile', imageFile);

        if (showDialog.opType === 'Edit') {

            dispatch(submitUpdate(formData,vacData.id));
          this.handleClose();
        }
        if (showDialog.opType === 'Add') {
            dispatch(submitNewVac(formData,null));
          this.handleClose();
        }
    };

    render() {
        const {showDialog, loading} = this.props;
        const {description, destination, fromDate, toDate, price, image} = this.state;

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
                        value={description}
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
                        value={destination}
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
                        type="number"
                        value={price}
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
                            value={fromDate}
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
                            value={toDate}
                            onChange={this.handleToDateChange}
                            KeyboardButtonProps={{
                                "aria-label": "change date"
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    );
                    <label>Image:</label>
                    {showDialog.opType === 'Edit' && (<img src={`http://vacationer.romandulman.com/uploads/${image}`}/>)}
                    <input type="file" name="imageFile" onChange={e => {
                        this.onFieldChange(e)
                    }}/>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={this.handleClose}>Cancel</Button>
                    <Button variant="contained" color="primary" onClick={e => {
                        this.submitForm(e)
                    }} color="primary">
                        {showDialog.opType}
                        {loading && <CircularProgress size={24}/>}
                    </Button>
                </DialogActions>
                <hr/>
            </Dialog>
        );
    }
}

const mapStateToProps = state => {
    return {
        vacData: state.AdminReducer.data,
        showDialog: state.AdminReducer.showDialog,
        loading: state.AdminReducer.loading
    };
};

export default connect(mapStateToProps)(withStyles(Styles)(AddEditVac));
