package com.example.restauranBookingSystem.restaurantBookingSystem.components;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Booking;
import com.example.restauranBookingSystem.restaurantBookingSystem.models.Customer;
import com.example.restauranBookingSystem.restaurantBookingSystem.repository.booking.BookingRepository;
import com.example.restauranBookingSystem.restaurantBookingSystem.repository.CustomerRepository;
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

//        Create Cuustomers

        Customer customer1 = new Customer("Joe", "Bloggs", "07000000000", "joebloggs@gmail.com");
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Jane", "Doe", "07111111111", "janedoe@gmail.com");
        customerRepository.save(customer2);

        Customer customer3 = new Customer("Sujaul", "Miah", "07222222222", "sujaul@gmail.com");
        customerRepository.save(customer3);

        Customer customer4 = new Customer("Will", "Smith", "07333333333", "willsmith@gmail.com");
        customerRepository.save(customer4);

        Customer customer5 = new Customer("James", "Bond", "07007007007", "007@gmail.com");
        customerRepository.save(customer5);

        Customer customer6 = new Customer("Iron", "Man", "07444444444", "ironman@gmail.com");
        customerRepository.save(customer6);

        Customer customer7 = new Customer("Captain", "America", "07555555555", "captainamerica@gmail.com");
        customerRepository.save(customer7);

        Customer customer8 = new Customer("Black", "Widow", "07666666666", "blackwidow@gmail.com");
        customerRepository.save(customer8);

        Customer customer9 = new Customer("Bruce", "Banner", "07777777777", "brucebanner@gmail.com");
        customerRepository.save(customer9);

        Customer customer10 = new Customer("Hawk", "Eye", "07888888888", "hawkeye@gmail.com");
        customerRepository.save(customer10);

        Customer customer11 = new Customer("Thors", "Hammer", "07999999999", "thorshammer@gmail.com");
        customerRepository.save(customer11);

        Customer customer12 = new Customer("Spider", "Man", "07101010101", "notspiderman@gmail.com");
        customerRepository.save(customer12);

        Customer customer13 = new Customer("Ant", "Man", "07202020202", "antman@gmail.com");
        customerRepository.save(customer13);

        Customer customer14 = new Customer("Doctor", "Strange", "07909090909", "strange@gmail.com");
        customerRepository.save(customer14);

        Customer customer15 = new Customer("Black", "Panther", "07675432190", "wakanda@gmail.com");
        customerRepository.save(customer15);

//        Create Bookings

        Booking booking1 = new Booking(0,2, customer1, 2020, 3,1,"15:00");
        bookingRepository.save(booking1);

        Booking booking2 = new Booking(0,9, customer2, 2020, 3,2,"16:30");
        bookingRepository.save(booking2);

        Booking booking3 = new Booking(9,1, customer1, 2020, 4,9,"17:45");
        bookingRepository.save(booking3);

        Booking booking4 = new Booking(10,10, customer15, 2020, 3,9,"12:15");
        bookingRepository.save(booking4);

        Booking booking5 = new Booking(1,2, customer6, 2020, 3,9,"12:30");
        bookingRepository.save(booking5);

        Booking booking6 = new Booking(1,1, customer1, 2020, 3,9,"13:45");
        bookingRepository.save(booking6);

        Booking booking7 = new Booking(2,2, customer2, 2020, 3,10,"14:00");
        bookingRepository.save(booking7);

        Booking booking8 = new Booking(3,3, customer3, 2020, 3,11,"15:15");
        bookingRepository.save(booking8);

        Booking booking9 = new Booking(4,4, customer4, 2020, 3,12,"16:30");
        bookingRepository.save(booking9);

        Booking booking10 = new Booking(5,5, customer5, 2020, 3,10,"17:45");
        bookingRepository.save(booking10);

        Booking booking11 = new Booking(6,6, customer6, 2020, 3,10,"18:00");
        bookingRepository.save(booking11);

        Booking booking12 = new Booking(7,7, customer7, 2020, 3,10,"19:15");
        bookingRepository.save(booking12);

        Booking booking13 = new Booking(8,8, customer8, 2020, 2,7,"19:15");
        bookingRepository.save(booking13);

        Booking booking14 = new Booking(9,9, customer9, 2020, 2,7,"20:30");
        bookingRepository.save(booking14);

        Booking booking15 = new Booking(9,1, customer10, 2020, 2,7,"20:30");
        bookingRepository.save(booking15);

        Booking booking16 = new Booking(9,2, customer11, 2020, 2,7,"21:30");
        bookingRepository.save(booking16);

        Booking booking17 = new Booking(9,3, customer12, 2020, 2,7,"21:45");
        bookingRepository.save(booking17);

    }
}
