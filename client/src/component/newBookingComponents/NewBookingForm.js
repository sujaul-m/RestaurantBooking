import React, {Component} from 'react';


class NewBookingForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: "",
            time: "",
            kidsGuests: 0,
            adultsGuests: 0,
            bookingCustomer: ""
            }
        this.handleTime = this.handleTime.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleKidsGuests = this.handleKidsGuests.bind(this);
        this.handleAdultsGuests = this.handleAdultsGuests.bind(this);
        this.handleSubmitBooking = this.handleSubmitBooking.bind(this);

    }

    handleDate(e) {
        this.setState({date: e.target.value});
    }

    handleTime(e) {
        this.setState({time: e.target.value});
    }

    handleKidsGuests(e) {
        this.setState({kidsGuests: e.target.value});
    }

    handleAdultsGuests(e) {
        this.setState({adultsGuests: e.target.value});
    }

    static getDerivedStateFromProps(customer) {
        return {
            bookingCustomer: customer.bookedCustomer
        }
    }

    handleSubmitBooking(e) {
        e.preventDefault();
        const newBooking = {
            date: this.state.date,
            time: this.state.time,
            kidsGuests: this.state.kidsGuests,
            adultsGuests: this.state.adultsGuests,
            customer: this.state.bookingCustomer
        }
    this.props.addBooking(newBooking);
    }

    render() {

        const availableTimes = this.props.times.map(time => {
            return <option value={time} key={time}>{time}</option>
        })

        return (
        <div>
        <h3 className="new-customer-title">Please enter booking details:</h3>
        <form className="new-customer-form" onSubmit={this.handleSubmitBooking}>
            <input required type="date" name="date" onChange={this.handleDate} value={this.state.date}/>
            <select required name="time" onChange={this.handleTime} value={this.state.time}>
            <option disabled value="">Select Time:</option>
            {availableTimes}
            </select>
            <label>Adults:</label>
            <input type="number" min="1" max="15" name="adultsGuests" onChange={this.handleAdultsGuests} value={this.state.adultsGuests}/>
            <label>Children:</label>
            <input type="number" min="0" max="15" name="kidsGuests" onChange={this.handleKidsGuests} value={this.state.kidsGuests}/>
            <button type="submit">Save Booking</button>
        </form>
        <p>{this.props.bookedCustomer.id}</p>

        </div>


    )
}
}

export default NewBookingForm;