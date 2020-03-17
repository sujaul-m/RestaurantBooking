import React, {Component} from 'react';
import ExistingCustomers from '../component/newBookingComponents/ExistingCustomers';
import NewCustomerForm from '../component/newBookingComponents/NewCustomerForm';
import NewBookingForm from '../component/newBookingComponents/NewBookingForm';
import Request from '../helpers/request';
import './NewBookingBox.css';



class NewBookingBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            customers: [],
            bookingCustomer: "",
            conBooking: ""
        }

        this.handlePost = this.handlePost.bind(this);
        this.handleNewBooking = this.handleNewBooking.bind(this);
        this.handleCustomer = this.handleCustomer.bind(this);
        this.visibleNewCustomer = this.visibleNewCustomer.bind(this);
;    }

    componentDidMount(){
        const request = new Request();

        request.get('http://localhost:8080/customers/all')
        .then((data) => {
            this.setState({customers: data})
        })
    }

    handlePost(customer) {
        const request = new Request();
        request.post('http://localhost:8080/customers', customer)
        .then((customer) => {
            this.setState({bookingCustomer: customer.id})
        })
    }

    handleNewBooking(booking) {
        const request = new Request();
        request.post('http://localhost:8080/bookings/add', booking)
        .then((booking) => {
            if (!booking.id) {
            window.location = `/bookings/confirm/unsuccessful`
            }
            else {
                window.location = `/bookings/${booking.id}/confirm`
            }
        })
    }

    handleCustomer(customer) {
        this.setState({bookingCustomer: customer})
        this.visibleExistingCustomer();
    }

    visibleExistingCustomer() {
        document.getElementById("booking").style.display = "block";
        document.getElementById("newCustomerForm").style.display = "none";
      }

      visibleNewCustomer() {
        document.getElementById("booking").style.display = "block";
        document.getElementById("existingCustomerForm").style.display = "none";
    }

    render () {

           return (
            <div>
            <h1 className="new-booking-title">New Booking</h1>
            <div id="existingCustomerForm">
            <ExistingCustomers customers={this.state.customers} handleSelectedCustomer={this.handleCustomer}/>
            </div>
            <div id="newCustomerForm">
            <NewCustomerForm addCustomer={this.handlePost} seeForm={this.visibleNewCustomer}/>
            </div>
            <div id="booking">
            <NewBookingForm addBooking={this.handleNewBooking} bookedCustomer={this.state.bookingCustomer} times={this.props.times}/>
            </div>
            </div>
        )
    }
}

export default NewBookingBox;