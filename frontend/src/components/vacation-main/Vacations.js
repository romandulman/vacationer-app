import React, { Component } from "react";
import Item from "./Item";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";


const mapStateToProps = state => {
    return {
        VacData: state.VacData,
    };
};



class Vecations extends Component {
    render() {
        return (
            <div className="MainMargin">
                <h1>VECCCC</h1>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Vecations);