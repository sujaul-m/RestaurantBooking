import React, { Component } from 'react'
import '../App.css';


    class About extends Component{
        render(){
            return (
            <div className="about" >
                <h1>&nbsp;&nbsp;&nbsp;&nbsp;PitStop Reservation System</h1>
                <br></br><br></br>

                <h2>&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;<u>Information On Bookings</u></h2>
                <br></br><br></br>

                <p>Bookings with party number exceeding 8 will be charged <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a service charge of 50%</p>
                <br></br>

                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Last Reservation is 10pm</p>
                <br></br>

                <p>The Restaurant cannot seat more than 50 Guests per hour</p>
                <br></br>

                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Customers tenth visit is on the house:
                <br></br><u><font color="red"> FOOD ONLY - DRINKS NOT INCLUDED - MAX PARTY OF 4</font></u></p>
                <br></br><br></br>
            </div>
            )
        }
    }

    export default About;