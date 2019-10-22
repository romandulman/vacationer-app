import React,{Component} from 'react'
import CanvasJSReact from '../../../../../utils/canvasjs/canvasjs.react.js';
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { Styles } from "../admin.assets/stylesheets/Admin.stylesheet";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Reports extends Component{
/*state ={
    data:[
        {
            series: 8,
            datums: 3,
            dataType: 'ordinal'
        },

    ],
    axes:[
        { primary: true, type: 'ordinal', position: 'bottom' },
        { position: 'left', type: 'linear', stacked: false }
    ],
    series:[
       { type: 'bar'}
    ]

}*/
    render(){
        const { classes,followData } = this.props;
        const  data =  followData.vacations.map(item => ( { label: item.id,  y: item.followerscount  }));
        const options = {
            title: {
                text: "Vacation Follow Report"
            },
            dataPointWidth:120,
            data: [
                {
                    type: "column",
                    dataPoints: [ data
                   /*     { label: "Apple",  y: 10  },
                        { label: "Orange", y: 15  },
                        { label: "Banana", y: 25  },
                        { label: "Mango",  y: 30  },
                        { label: "Grape",  y: 28  }*/
                    ]
                }
            ]
        }
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
    console.log(state.AdminReducer.followData)
    return {
        followData: state.AdminReducer.followData, //with all data
        loading: state.AdminReducer.followData
    };
};

export default connect(mapStateToProps)(withStyles(Styles)(Reports));