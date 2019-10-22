import React,{Component} from 'react'
import { Chart } from 'react-charts'

class Reports extends Component{
state ={
    data:[
        {
            label: 'Series 1',
            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        },
        {
            label: 'Series 2',
            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
        }
    ],
    axes:[
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' }
    ]
}
    render(){
        return(

            <div>
                <h1>Reports</h1>
                <div
                    style={{
                        width: '400px',
                        height: '300px'
                    }}
                >
                    <Chart data={this.state.data} axes={this.state.axes} />
                </div>
            </div>



        )
    }
}

export default Reports;
