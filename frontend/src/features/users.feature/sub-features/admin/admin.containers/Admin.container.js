import React, { Component } from "react";
import  Header  from '../layout/header.layout/Header.container';
import  VacContainer from '../../../../vacations.feature/vacations.containers/Vacations.container'


import { connect } from 'react-redux';
import {Link} from "react-router-dom";

class Admin extends Component {
    render() {
        return (
           <div>


           </div>
        );
    }
}

const mapStateToProps = state => {
    return {
       isAdmin: state.UserReducer.isAdmin
    }
}

export default connect(mapStateToProps)(Admin);
