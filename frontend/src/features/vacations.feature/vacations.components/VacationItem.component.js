import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import {openEditVac, deleteVacation} from "../../users.feature/sub-features/admin/admin.redux/Admin.actions";
import {followVac,unFollowVac} from "../vacations.redux/Vacations.actions";
import {connect} from "react-redux";
import {Styles} from "../vacations.assets/stylesheets/Vacations.stylesheet";
import "../vacations.assets/stylesheets/Vacations.stylesheet.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class VacationItem extends Component {

    handleDeleteVac = vacId => {
        const {dispatch} = this.props;
        if (window.confirm('You are going to Delete this Vacation, are you sure?')) {
            dispatch(deleteVacation(vacId));
        }
    };

    render() {
        const {dispatch,isEditable,image,followerscount,description,price,dateTo,dateFrom,vacId } = this.props;
        return (
            <div className="vacation-item">
                <Card className="item-card">

                    <div><img width="100%" src={`http://localhost:8081/${image}`}/>
                    </div>
                    <CardContent>
                        <Typography
                            className="item-description"
                            color="textSecondary"
                            gutterBottom
                        >
                            <storng> Followers: </storng>{followerscount}
                        </Typography>
                        <Typography
                            className="item-description"
                            color="textSecondary"
                            gutterBottom
                        >
                            <storng> Description:</storng> {description}
                        </Typography>
                        <Typography
                            className="item-price"
                            color="textSecondary"
                            gutterBottom
                        >
                            <storng> Price:</storng> {price} $
                        </Typography>
                        <Typography
                            className="item-dates"
                            color="textSecondary"
                            gutterBottom
                        >
                            <storng> Dates:</storng>
                            <p>{dateFrom} <strong>To</strong> {dateTo}</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {!isEditable && (<Button onClick={()=>{dispatch(followVac(vacId))}} size="small">Follow</Button>)}
                        {isEditable && (
                            <div>
                                <Button size="small" variant="contained" color="primary"
                                        onClick={() => dispatch(openEditVac(vacId))}>Edit</Button>
                                <Button size="small" variant="contained" color="secondary"
                                        onClick={() => this.handleDeleteVac(vacId)}>Delete</Button>
                            </div>
                        )}
                    </CardActions>
                </Card>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isEditable: state.AdminReducer.isEditable
    };
}

export default connect(mapStateToProps)(withStyles(Styles)(VacationItem));
