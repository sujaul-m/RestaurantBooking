package com.example.restauranBookingSystem.restaurantBookingSystem.components;

import com.example.restauranBookingSystem.restaurantBookingSystem.models.Customer;
import com.example.restauranBookingSystem.restaurantBookingSystem.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    private CustomerRepository customerRepository;

    @Autowired
    public DataLoader(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public DataLoader(){}

    public void run(ApplicationArguments args){
        Customer customer1 = new Customer("Joe", "Bloggs", "07000000000", "joebloggs@gmail.com");
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Jane", "Doe", "07111111111", "janedoe@gmail.com");
        customerRepository.save(customer2);

        Customer customer3 = new Customer("Sujaul", "Miah", "07222222222", "sujaul@gmail.com");
        customerRepository.save(customer3);
    }
}