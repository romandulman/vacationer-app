import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import VacItemComponent from "../vacations.components/VacationItem.component";
import { connect } from "react-redux";
import { showAll } from "../vacations.redux/Vacations.actions";
import { Styles } from "../vacations.assets/stylesheets/Vacations.stylesheet.js";
import { withStyles } from "@material-ui/core";
import "../vacations.assets/stylesheets/Vacations.stylesheet.css";

class Vacations extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(showAll());
  }

  render() {
    const { vacations } = this.props;
    const { classes, loggedIn } = this.props;
    if (!loggedIn) {
      this.props.history.push("/login");
    }
    return (
      <div className={classes.rootDiv}>
        {vacations &&
          vacations.map(item => (
            <VacItemComponent
              key={item.id}
              vacId={item.id}
              followerscount={item.followerscount}
              description={item.description}
              price={item.price}
              image={item.image}
              datefrom={item.datefrom}
              dateto={item.dateto}
            />
          ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.VacationsReducer.vacData);
  return {
    loggedIn: state.UserReducer.loggedIn,
    vacations: state.VacationsReducer.vacData
  };
}

export default connect(mapStateToProps)(withStyles(Styles)(Vacations));
