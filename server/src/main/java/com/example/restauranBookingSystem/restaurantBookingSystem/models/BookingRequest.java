package com.example.restauranBookingSystem.restaurantBookingSystem.models;

import java.sql.Date;

public class BookingRequest {
    private int kidsGuests;
    private int adultsGuests;
    private String date;
    private String time;
    private Long customer;

    public BookingRequest(int kidsGuests, int adultsGuests, String date, String time, Long customer) {
        this.kidsGuests = kidsGuests;
        this.adultsGuests = adultsGuests;
        this.date = date;
        this.time = time;
        this.customer = customer;
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Long getCustomer() {
        return customer;
    }

    public void setCustomer(Long customer) {
        this.customer = customer;
    }
}
