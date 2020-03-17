import React, {Component} from 'react';
import '../../App.css';
import { Bar } from 'react-chartjs-2';


class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className="mainchart"style={{position: "relative", width: "80%", height:550, marginLeft:"10%", marginRight:"10%", marginTop:"10px"}} >

                <Bar
                data={this.props.chartData}

                options={{
                    title:{
                        display: true,
                        text: 'Guests per hour',
                        fontSize: 25

                    },
                    legend:{
                        display: true,
                        position: 'right'
                    }
                     }}
                />


            </div>
        )
    }

}

export default Chart;
