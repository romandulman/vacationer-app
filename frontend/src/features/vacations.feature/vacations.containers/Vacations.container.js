import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {showAll} from "../vacations.redux/Vacations.actions";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import VacItemComponent from "../vacations.components/VacationItem.component";
import {Styles} from "../vacations.assets/stylesheets/Vacations.stylesheet.js";
import "../vacations.assets/stylesheets/Vacations.stylesheet.css";

class Vacations extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(showAll());
    }

    render() {
        const {vacations} = this.props;
        const {classes, loggedIn} = this.props;
        if (!loggedIn) {
            this.props.history.push("/login");
        }
        return (
            <div className={classes.rootDiv}>
                <Container>
                    <Row>
                        {vacations &&
                        vacations.map(item => (
                            <Col md={4}> <VacItemComponent
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
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.UserReducer.loggedIn,
        vacations: state.VacationsReducer.vacData
    };
}

export default connect(mapStateToProps)(withStyles(Styles)(Vacations));
