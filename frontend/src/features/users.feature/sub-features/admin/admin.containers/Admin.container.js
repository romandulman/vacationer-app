import React, { Component } from "react";
import  VacContainer from '../../../../vacations.feature/vacations.containers/Vacations.container'
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssessmentIcon from '@material-ui/icons/Assessment';
import {withStyles} from "@material-ui/core";
import {Styles} from '../admin.assets/stylesheets/Admin.stylesheet'
import EditIcon from '@material-ui/icons/Edit';

class Admin extends Component {

    state ={
        showVacations:'false',
        showReports:'false',
        showInfo: 'true',
    }

handleForEdit = ()=>{

};

    render() {
        const {classes} = this.props;
        const {showEdit, showReports} = this.state;

        return (
           <div>

               <div>
               <BottomNavigation
                 showLabels
                   className={classes.bottomNav}
               >
                   <BottomNavigationAction label="Edit Vacations"  onClick={this.handleForEdit} icon={<EditIcon />} />
                   <BottomNavigationAction label="View Graphs " icon={<AssessmentIcon />} />
               </BottomNavigation>
               </div>
           </div>
        );
    }
}

const mapStateToProps = state => {
    return {
       showReports: state.AdminReducer.showReports //with all data

    }
}

export default connect(mapStateToProps)(withStyles(Styles)(Admin));
