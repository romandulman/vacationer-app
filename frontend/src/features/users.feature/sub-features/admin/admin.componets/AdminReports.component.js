import React,{Component} from 'react'
import CanvasJSReact from '../../../../../utils/canvasjs/canvasjs.react.js';
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { Styles } from "../admin.assets/stylesheets/Admin.stylesheet";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Reports extends Component{

    render(){
        const { classes,followersData } = this.props;
        const  data =  followersData.map(item => ( { label: `Vacation ID: ${item.id}, Description: ${item.description}`,  y: item.followerscount  }));
console.log(data)
        const options = {
            title: {
                text: "Vacation Follow Report"
            },
            dataPointWidth:120,
            data: [
                {
                    type: "column",
                    dataPoints:data
                }
            ]
        };
        return(
            <div>
                <div className={classes.chartDiv}>
                <CanvasJSChart options = {options}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.AdminReducer.reportsData)
    return {
        followersData: state.AdminReducer. reportsData, //with all data
        loading: state.AdminReducer.loading
    };
};

export default connect(mapStateToProps)(withStyles(Styles)(Reports));