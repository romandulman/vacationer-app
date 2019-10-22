import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { Styles } from "../admin.assets/stylesheets/Admin.stylesheet";
import { makeVacEditable,openAddDialog,followReports } from "../admin.redux/Admin.actions";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import VacItemComponent from "../../../../vacations.feature/vacations.components/VacationItem.component";
import Reports from "../admin.componets/AdminReports.component";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AssessmentIcon from "@material-ui/icons/Assessment";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddEditVacDialog from "./AdminAddEditVac.container";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {fecthAllVacations} from "../admin.redux/Admin.actions";

class Admin extends Component {
  state = {
    showVacations: false,
    showReports: false,
    showInfo: true
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fecthAllVacations());
  }

  handleAddVacation = () => {
    const { dispatch } = this.props;
    dispatch(openAddDialog())
  };

  handleShowEditSection = () => {
    const { dispatch } = this.props;
    this.setState({ showVacations: true, showReports: false,  showInfo: false });
    dispatch(makeVacEditable());
  };

  handleShowReportsSection = () => {
    const { dispatch } = this.props;
    this.setState({ showVacations: false, showReports: true,  showInfo: false });
    dispatch(followReports())
  };

  render() {
    const { classes,vacations,showDialog } = this.props;
    const { showVacations, showReports,showInfo } = this.state;

    return (
      <div>
        <div className={classes.rootDiv}>
        {showInfo &&(
            <div className={classes.infoBox}>
            <h2>Admin Area !</h2>
              <h5> Here You Can: Edit Vacations, Add Vacations, View Reports</h5>
              <h5> To start please choose one of options in the bottom nav</h5>
          </div>
          ) }
            {showReports && <Reports />}
            {showDialog.show && <AddEditVacDialog/>}
            { showVacations && ( <Container>
              <Row ><h4 className={classes.infoBox}>Edit Vacations</h4></Row>
              <Row>
                {vacations &&
                vacations.map(item => (
                    <Col md={4}>    <VacItemComponent
                        key={item.id}
                        vacId={item.id}
                        followerscount={item.followerscount}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        dateFrom={item.from}
                        dateTo={item.to}
                    /></Col>
                ))}
              </Row>
            </Container>)}
          <BottomNavigation showLabels className={classes.bottomNav}>
            <BottomNavigationAction
              label="Edit Vacations"
              className={classes.navItem}
              onClick={this.handleShowEditSection}
              icon={<EditIcon />}
            />
            <BottomNavigationAction
              label="Add Vacation"
              className={classes.navItem}
              onClick={this.handleAddVacation}
              icon={<AddCircleOutlineIcon />}
            />
            <BottomNavigationAction
              label="View Reports"
              className={classes.navItem}
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
  console.log(state.AdminReducer.showDialog)
  return {
    showReports: state.AdminReducer.showReports, //with all data
    vacations: state.AdminReducer.vacations,
    showDialog: state.AdminReducer.showDialog
  };
};

export default connect(mapStateToProps)(withStyles(Styles)(Admin));
