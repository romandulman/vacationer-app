import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import './Vacations.stylesheet.css'
import  VacItemComponent  from './VacationsItem.component';
import { connect } from 'react-redux'
import {showAll} from './Vacations.actions'

class Vacations extends Component {

    componentDidMount() {
        const { dispatch } = this.props;

       dispatch(showAll())
    }

    render() {
        return (
            <div className="vacations-list">

              {this.props.vacations.map(item => (
                    <VacItemComponent key={item.id} followerscount ={item.followerscount} description ={item.description} price={item.price} image = {item.image} datefrom={item.datefrom} dateto={item.dateto} />
                ))}

            </div>
        );
    }
}

function mapStateToProps(state) {
console.log(state.vacData)
    return {
        vacations: state.data
    }
}


const connectedVecations = connect(mapStateToProps)(Vacations);
export { connectedVecations as Vacations };
