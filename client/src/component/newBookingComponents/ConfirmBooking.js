import React, {Component} from 'react';

class ConfirmBooking extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
        render(){
        return(
        <div className="successful-booking">
        <h1>Booking Successful!</h1>
        <p>
        <img alt="thumbs up, booking confirmed" src="/thumbsup.jpeg"></img>
        </p>
        </div>
        )
    }
}

export default ConfirmBooking;