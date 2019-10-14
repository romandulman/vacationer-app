import React, { Component } from "react";
import VacContainer from "../../../../vacations.feature/vacations.containers/Vacations.container";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { withStyles } from "@material-ui/core";
import { Styles } from "../admin.assets/stylesheets/Admin.stylesheet";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Reports from "../admin.componets/AdminReports.component";
import { makeVacEditable,openAddDialog } from "../admin.redux/Admin.actions";
import AddEditVacDialod from "./AdminAddEditVac.container";

class Admin extends Component {
  state = {
    showVacations: false,
    showReports: false,
    showInfo: true
  };

  handleAddVacation = () => {
    const { dispatch } = this.props;

dispatch(openAddDialog())
  };

  handleShowEditSection = () => {
    const { dispatch } = this.props;
    this.setState({ showVacations: true, showReports: false });
    dispatch(makeVacEditable());
  };

  handleShowReportsSection = () => {
    this.setState({ showVacations: false, showReports: true });
  };

  render() {
    const { classes } = this.props;
    const { showVacations, showReports } = this.state;

    return (
      <div>
        <div>
          <div>
            {showVacations && <VacContainer />}
            {showReports && <Reports />}
            <AddEditVacDialod/>
          </div>
          <BottomNavigation showLabels className={classes.bottomNav}>
            <BottomNavigationAction
              label="Edit Vacations"
              onClick={this.handleShowEditSection}
              icon={<EditIcon />}
            />
            <BottomNavigationAction
              label="Add Vacation"
              onClick={this.handleAddVacation}
              icon={<AddCircleOutlineIcon />}
            />
            <BottomNavigationAction
              label="View Reports"
              icon={<AssessmentIcon />}
              onClick={this.handleShowReportsSection}
            />
          </BottomNavigation>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showReports: state.AdminReducer.showReports //with all data
  };
};

export default connect(mapStateToProps)(withStyles(Styles)(Admin));
