import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import './Vacations.stylesheet.css'
import  VacItemComponent  from './VacationsItem.component';
import { connect } from 'react-redux'
import {showAll} from './Vacations.actions'
import { Styles } from "./Vacations.stylesheet.js";
import {withStyles} from "@material-ui/core";

class Vacations extends Component {

    componentDidMount() {
        const { dispatch} = this.props;
       dispatch(showAll())
    }

    render() {
        const {vacations } = this.props;
        const { classes } = this.props;

        return (
            <div className={classes.rootDiv}>


              {vacations && vacations.map(item => (
                    <VacItemComponent key={item.id} followerscount ={item.followerscount} description ={item.description} price={item.price} image = {item.image} datefrom={item.datefrom} dateto={item.dateto} />
                ))}

            </div>
        );
    }
}

function mapStateToProps(state) {
console.log( state.VacReducer.vacData);
    return {
        vacations: state.VacReducer.vacData
    }
}


const connectedVecations = connect(mapStateToProps)(withStyles(Styles)(Vacations));
export { connectedVecations as Vacations };
