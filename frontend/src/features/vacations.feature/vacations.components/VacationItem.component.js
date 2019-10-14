import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../vacations.assets/stylesheets/Vacations.stylesheet.css";
import DeleteIcon from "@material-ui/icons/Delete";
import {openEditVac} from "../../users.feature/sub-features/admin/admin.redux/Admin.actions";
import { connect } from "react-redux";

import { Styles } from "../vacations.assets/stylesheets/Vacations.stylesheet";

class VacationItem extends Component {
  render() {
    const { isEditable , dispatch} = this.props;

    return (
      <div className="vacation-item">
        <Card className="item-card">
          <div></div>
          <CardContent>
            <Typography
              className="item-description"
              color="textSecondary"
              gutterBottom
            >
              Followers {this.props.followerscount}
            </Typography>
            {isEditable && (
              <CardActions>
                <Button size="small" onClick={()=>dispatch(openEditVac(this.props.vacId))}>Edit</Button>
                <Button size="small">Delete</Button>
              </CardActions>
            )}
            <Typography
              className="item-description"
              color="textSecondary"
              gutterBottom
            >
              D: {this.props.description}
            </Typography>
            <Typography
              className="item-price"
              color="textSecondary"
              gutterBottom
            >
              {this.props.price} $
            </Typography>

            <img src={this.props.images} className="item-image" />

            <Typography
              className="item-dates"
              color="textSecondary"
              gutterBottom
            >
              {this.props.datefrom} To {this.props.dateto}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Follow</Button>
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
