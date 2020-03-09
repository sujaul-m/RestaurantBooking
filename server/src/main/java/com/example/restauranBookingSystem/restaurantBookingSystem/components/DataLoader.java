package com.example.restauranBookingSystem.restaurantBookingSystem.components;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Booking;
import com.example.restauranBookingSystem.restaurantBookingSystem.models.Customer;
import com.example.restauranBookingSystem.restaurantBookingSystem.repository.CustomerRepository;
import com.example.restauranBookingSystem.restaurantBookingSystem.repository.booking.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    private CustomerRepository customerRepository;
    private BookingRepository bookingRepository;


    @Autowired
    public DataLoader(CustomerRepository customerRepository, BookingRepository bookingRepository) {

        this.customerRepository = customerRepository;
        this.bookingRepository = bookingRepository;
    }

    public DataLoader(){}

    public void run(ApplicationArguments args){
        Customer customer1 = new Customer("Joe", "Bloggs", "07000000000", "joebloggs@gmail.com");
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Jane", "Doe", "07111111111", "janedoe@gmail.com");
        customerRepository.save(customer2);

        Customer customer3 = new Customer("Sujaul", "Miah", "07222222222", "sujaul@gmail.com");
        customerRepository.save(customer3);

        Booking booking1 = new Booking(0,2, customer1, 120, 3,1,15,00);
        bookingRepository.save(booking1);

        Booking booking2 = new Booking(0,9, customer2, 120, 3,2,16,30);
        bookingRepository.save(booking2);

        Booking booking3 = new Booking(9,1, customer1, 120, 4,9,17,45);
        bookingRepository.save(booking3);

    }
}