import React, {Component} from 'react';

class EditBookingForm extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }



        handleSubmit(e) {
            e.preventDefault();

            const booking = {
                date: e.target.date.value,
                time: e.target.time.value,
                kidsGuests: e.target.kidsGuests.value,
                adultsGuests: e.target.adultsGuests.value,
                customer: 'http://localhost:8080/customers/'+this.props.booking.customer.id
            }
            this.props.handleUpdate(booking, this.props.booking.id)
        }

        render() {
            if (!this.props.booking) {
                return "Loading!"
            }

            const availableTimes = this.props.times.map(time => {
                return <option value={time} key={time}>{time}</option>
            })

        return(
        <div>
            <h2 className="edit-booking-heading">Edit Booking</h2>
            <form className="edit-booking-form" onSubmit={this.handleSubmit}>
                <label>Date:</label>
                <input required type="date" name="date" defaultValue={this.props.booking.date}/>
                <select required name="time" defaultValue={this.props.booking.time}>
                <option disabled value="">Select Time:</option>
                 {availableTimes}
                </select>



                <label>Adults Guests:</label>
                <input required min="1" max="15" type="number" placeholder="Adults:" name="adultsGuests" defaultValue={this.props.booking.adultsGuests}/>
                <label>Kids Guests:</label>
                <input type="number" min="0" max="15" placeholder="Children:" name="kidsGuests" defaultValue={this.props.booking.kidsGuests}/>
                <button type="submit">Save Changes to Booking</button>
            </form>
        </div>
        )
        }
}

export default EditBookingForm;
