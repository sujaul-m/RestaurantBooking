import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewBookingBox from './NewBookingBox.js';
import NavBar from '../component/NavBar.js';
import Request from '../helpers/request';
import BookingPage from '../component/BookingSystemComponents/BookingPage';
import ShowBooking from '../component/BookingSystemComponents/ShowBooking';
import Chart from '../component/BookingSystemComponents/Chart';
import EditBookingForm from '../component/BookingSystemComponents/EditBookingForm';
import SearchBar from '../component/BookingSystemComponents/SearchBar'
import ConfirmBooking from '../component/newBookingComponents/ConfirmBooking';
import BookingUnsuccessful from '../component/newBookingComponents/BookingUnsuccessful';
import '../App.css';
import About from '../component/About';


class BookingSystemBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      filteredBookings: [],
      searchedDate: "",
      chartdata: {},
      hours: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
      confirmedBooking: {},
      times: ["12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45",
            "15:00", "15:15", "15:30", "15:45","16:00", "16:15", "16:30", "16:45","17:00", "17:15", "17:30", "17:45",
            "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:30", "20:45",
            "21:00", "21:15", "21:30", "21:45", "22:00"]
    }

    this.deleteBookingById = this.deleteBookingById.bind(this);
    this.updateBooking = this.updateBooking.bind(this);
    this.setSearchedDate = this.setSearchedDate.bind(this);
    this.getSearchedBookings = this.getSearchedBookings.bind(this);
    this.sortGuestData = this.sortGuestData.bind(this);
    this.setChartData = this.setChartData.bind(this);
    this.handleThisBooking = this.handleThisBooking.bind(this);
  }

  componentDidMount() {
    const formattedDate = this.getTodayDate();
    this.getSearchedBookings(formattedDate);
    this.setChartData();
  }

  findBookingById(id) {
    return this.state.filteredBookings.find((booking) => {
      return booking.id === parseInt(id)
    });
  }

  getBooking(booking) {
      const request = new Request();
      request.get(booking)
      .then(() => {
        window.location = "/bookings"
      })
  }

  deleteBookingById(booking){
    const request = new Request();
    request.delete(booking)
    .then(() => {
      window.location = "/bookings"
    })
  }

  updateBooking(booking, id){
      const request = new Request();
      request.patch(`http://localhost:8080/bookings/${id}`, booking)
      .then(() => {
          window.location = "/bookings"
      })
  }

  handleThisBooking(booking){
    this.setState({confirmedBooking: booking})
    console.log({booking})
  }

  getTodayDate(){
    const dateJavascript = new Date();
    const year = dateJavascript.getFullYear();
    const month = dateJavascript.getMonth() + 1;
    const checkedMonth = month < 10 ? "0" + month : month;
    const date = dateJavascript.getDate();
    const checkedDate = date < 10 ? "0" + date : date;
    const formattedDate = year + "-" + checkedMonth + "-" + checkedDate;
    return formattedDate;
  }

  setSearchedDate(date){
    if(date.length > 5){
      this.setState({ searchedDate: date })
      this.getSearchedBookings(date);
    } else {
      const todayDate = this.getTodayDate();
      this.getSearchedBookings(todayDate);
    }
  }

  getSearchedBookings(date) {
    const request = new Request();

    request.get("http://localhost:8080/bookings/byDate/" + date)
      .then((data) => {
        this.setState({ filteredBookings: data })
      })
      .then(() => this.setChartData())
  }

  sortGuestData(){
    let guestsData = []
    this.state.hours.forEach(hour => {
      let foundBooking = false;
      let total = 0;
      this.state.filteredBookings.forEach(booking => {
        if(hour.substring(0,2) === booking.time.substring(0,2)){
          total += booking.adultsGuests + booking.kidsGuests
          foundBooking = true;
        }
      })
      if(foundBooking === false){
        guestsData.push(0);
      } else {
        guestsData.push(total);
      }
    })
    return guestsData;
  }
  setChartData(){
      const guestsArray = this.sortGuestData();
      this.setState({
          chartdata:{
              labels: this.state.hours,
              datasets: [
                  {
                      label: 'Guests',
                      data: guestsArray,
                      backgroundColor:[
                          'rgba(255, 99, 132, 0.6)',
                          'rgba(54, 162, 235, 0.6)',
                          'rgba(255, 206, 85, 0.6)',
                          'rgba(75, 192, 192, 0.6)',
                          'rgba(153, 102, 255, 0.6)',
                          'rgba(255, 159, 64, 0.6)',
                          'rgba(255, 99, 132, 0.6)'
                      ]
                  }

              ]
          }
      })
  }



  render() {
    return (
      <div>

        <Router>
        <Fragment>
            <NavBar />
        <Switch>

          <Route exact path="/">
            <div className="home-container">
            <About/>
            </div>
          </Route>

.
          <Route exact path="/bookings">
              <h1 className="search-bar-title">Search By Date</h1>
              <SearchBar className="search-bar" setSearchedDate={this.setSearchedDate} />
              <Chart chartData={this.state.chartdata} />
              <BookingPage bookings={this.state.filteredBookings} />
          </Route>

          <Route exact path="/bookings/:id" render={(props) => {
              const booking = this.findBookingById(props.match.params.id);
              return <ShowBooking booking={booking} deleteBooking={this.deleteBookingById} bookings={this.state.bookings}/>
          }}/>

          <Route exact path="/bookings/:id/edit" render={(props) => {
              const id = props.match.params.id
              const booking = this.findBookingById(id);
              return <EditBookingForm booking={booking} handleUpdate={this.updateBooking} times={this.state.times}/>
          }} />

            <Route exact path="/bookings/:id/confirm" render={(props) => {
              const id = props.match.params.id
              const booking = this.findBookingById(id);
              return <ConfirmBooking booking={booking} confirmedBooking={this.state.confirmedBooking} />
          }} />

          <Route path="/bookings/confirm/unsuccessful" render={() => {
            return <BookingUnsuccessful/>
          }} />

          <Route path="/newbooking" render={() => {
              return <NewBookingBox handleThisBooking={this.handleThisBooking} booking={this.state.confirmedBooking} times={this.state.times}/>
          }} />
        </Switch>
        </Fragment>
        </Router>


      </div>
    )
  }
}

export default BookingSystemBox;