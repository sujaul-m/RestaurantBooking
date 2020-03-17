package com.example.restauranBookingSystem.restaurantBookingSystem.controllers;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Booking;
import com.example.restauranBookingSystem.restaurantBookingSystem.models.BookingRequest;
import com.example.restauranBookingSystem.restaurantBookingSystem.models.Customer;
import com.example.restauranBookingSystem.restaurantBookingSystem.repository.booking.BookingRepository;
import com.example.restauranBookingSystem.restaurantBookingSystem.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "/bookings")
public class BookingController {

    BookingRepository bookingRepository;
    BookingService bookingService;

    @Autowired
    public BookingController(BookingRepository bookingRepository, BookingService bookingService) {
        this.bookingRepository = bookingRepository;
        this.bookingService = bookingService;
    }

    @RequestMapping(value = "/add", method= RequestMethod.POST)
    public Booking createBooking(@RequestBody BookingRequest bookingRequest){
        Customer customer = bookingService.getCustomer(bookingRequest.getCustomer());
        Booking booking = new Booking(bookingRequest, customer);
        return bookingService.addBooking(booking);
    }

    @GetMapping(value = "byDate/{date}")
    public List<Booking> findBookingsByDate(@PathVariable String date){
        System.out.println(date);
        String[] arrayOfString = date.split("-", 3);
        int year = Integer.parseInt(arrayOfString[0]) - 1900;
        int month = Integer.parseInt(arrayOfString[1]) - 1;
        int day = Integer.parseInt(arrayOfString[2]);
        Date searchByDate = new Date(year, month, day);
        return bookingRepository.findByDate(LocalDate.parse(date));
    }

    @GetMapping(value = "byDate/{date}/guestsPerHour/{hour}/guests/{guests}")
    public boolean guestsPerHour(@PathVariable String date, @PathVariable String hour, @PathVariable String guests){
        return bookingService.isDayAndTimeAvailable(date, hour, guests);
    }


}
