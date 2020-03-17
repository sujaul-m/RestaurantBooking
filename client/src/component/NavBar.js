import React from 'react';

const NavBar = (props) => {
    return (
        <div className="sidenav">
                <a href="/" className="nav-link">Home</a>
                <a href="/newbooking" className="nav-link">New Booking</a>
                <a href="/bookings" className="nav-link">Bookings</a>
                {/* <a href="/customerslist" className="nav-link">Customer List</a> */}
                {/* <a href="/purchases" className="nav-link">Bill</a> */}
                {/* <a href="/bill" className="nav-link">Pay</a> */}
        </div>
    )
}

export default NavBar;