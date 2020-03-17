import React from 'react';

const BookingUnsuccessful = () => {

    return(
        <div className="unsuccessful-booking">
        <h1>**Warning**</h1>
        <br></br>
        <h2>We are sorry but we cannot create the requested Booking</h2>
        <br></br>
        <h2>The booking exceeds the total capacity of the restaurant (maximum seats per hour is: 50)</h2>
        <br></br>
        <h3>Please check bookings and try requesting a different time and/or date.</h3>
        <br></br>
        <h3>Thank You</h3>
        </div>

    )
}

export default BookingUnsuccessful;