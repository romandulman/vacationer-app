import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {showAll} from "../vacations.redux/Vacations.actions";
import {Styles} from "../vacations.assets/stylesheets/Vacations.stylesheet.js";
import "../vacations.assets/stylesheets/Vacations.stylesheet.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import VacItemComponent from "../vacations.components/VacationItem.component";


class Vacations extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(showAll());
    }

    render() {

        const {vacations,follows,classes,loggedIn} = this.props;
        if (!loggedIn) {
            this.props.history.push("/login");
        }

const isFollowed = (id)=>{
    const found = function(element) {
        return element.vacationid === id
    }
return follows.some(found)
}

      console.log(isFollowed(119))


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
                                isFollowed={isFollowed(item.id)}
                            /></Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.VacationsReducer.followsData)
    return {
        loggedIn: state.UserReducer.loggedIn,
        vacations: state.VacationsReducer.vacData,
        follows: state.VacationsReducer.followsData
    };
}

export default connect(mapStateToProps)(withStyles(Styles)(Vacations));
