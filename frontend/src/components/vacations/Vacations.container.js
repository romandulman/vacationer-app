import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import './Vacations.stylesheet.css'
import  VacItemComponent  from './index';
import { connect } from 'react-redux'


class Vacations extends Component {
    render() {
        return (
            <div className="vacations-list">
                <div className="tasklisttitle">
                    <strong>{this.props.status}</strong>
                </div>
                {this.props.vacations.map(item => (
                    <VacItemComponent key={item.id} followerscount ={item.followerscount} description ={item.description} price={item.price} image = {item.image} datefrom={item.datefrom} dateto={item.dateto} />
                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}


const connectedVecations = connect(mapStateToProps)(Vacations);
export { connectedVecations as Vacations };
