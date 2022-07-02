package com.example.salesma.model;

import org.springframework.data.annotation.Id;

public class ClientModel {
    
    //encapsulamiento

    @Id
    private long id;
    private String name;
    private String lastname;
    private String address;
    private long phone;
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getLastname() {
        return lastname;
    }
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public long getPhone() {
        return phone;
    }
    public void setPhone(long phone) {
        this.phone = phone;
    }

   

    


   

    
}
