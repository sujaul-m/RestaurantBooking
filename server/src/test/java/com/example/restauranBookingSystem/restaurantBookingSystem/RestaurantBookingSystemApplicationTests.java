package com.example.restauranBookingSystem.restaurantBookingSystem;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Booking;
import com.example.restauranBookingSystem.restaurantBookingSystem.models.Customer;
import com.example.restauranBookingSystem.restaurantBookingSystem.repository.CustomerRepository;
import com.example.restauranBookingSystem.restaurantBookingSystem.repository.booking.BookingRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class RestaurantBookingSystemApplicationTests {

	private CustomerRepository customerRepository;
	private BookingRepository bookingRepository;

	@Autowired
	public RestaurantBookingSystemApplicationTests(CustomerRepository customerRepository, BookingRepository bookingRepository) {
		this.customerRepository = customerRepository;
		this.bookingRepository = bookingRepository;
	}

	@Test
	void contextLoads() {
	}

	@Test
	void canSaveCustomer(){
		assertEquals(15, customerRepository.findAll().size());
	}

	@Test
	void canSaveBooking(){
		Customer customer = customerRepository.getOne(1L);
		Booking booking = new Booking(2,3, customer, 20, 3,15,"14:00");
		bookingRepository.save(booking);
		assertEquals(18, bookingRepository.findAll().size());
		assertEquals(4, customer.getBookings().size());
	}


	@Test
	void canGetTotalGuest(){
		Booking booking = bookingRepository.getOne(3L);
		int result = booking.getTotalGuests();
		assertEquals(10, result);
	}

}