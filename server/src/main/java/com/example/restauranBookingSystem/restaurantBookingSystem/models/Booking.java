package com.example.restauranBookingSystem.restaurantBookingSystem.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Calendar;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "kids_guests")
    private int kidsGuests;

    @Column(name = "adults_guests")
    private int adultsGuests;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "time")
    private String time;

    @JsonIgnoreProperties("bookings")
    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    public Booking(){};

    public Booking(int kidsGuests, int adultsGuests, Customer customer, int year, int month, int date, String time) {
        this.kidsGuests = kidsGuests;
        this.adultsGuests = adultsGuests;
        this.customer = customer;
        this.date = LocalDate.of(year,month,date);
        this.time = time;
    }

    public Booking(BookingRequest request, Customer customer) {
        this.kidsGuests = request.getKidsGuests();
        this.adultsGuests = request.getAdultsGuests();
        this.customer = customer;
        this.date = LocalDate.parse(request.getDate());
        this.time = request.getTime();
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getKidsGuests() {
        return kidsGuests;
    }

    public void setKidsGuests(int kidsGuests) {
        this.kidsGuests = kidsGuests;
    }

    public int getAdultsGuests() {
        return adultsGuests;
    }

    public void setAdultsGuests(int adultsGuests) {
        this.adultsGuests = adultsGuests;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public int getTotalGuests(){
        return this.adultsGuests + this.kidsGuests;
    }
}
