package com.example.salesma.model;

import java.util.Date;

import org.springframework.data.annotation.Id;

public class ProductModel {
    
    @Id
    private long id;
    private String name;
    private String description;
    private double price;
    private Date dateofcreation;
    private boolean stock;
    private String fhoto;
<<<<<<< HEAD
    
=======
>>>>>>> main_maryy
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
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public Date getDateofcreation() {
        return dateofcreation;
    }
    public void setDateofcreation(Date dateofcreation) {
        this.dateofcreation = dateofcreation;
    }
    public boolean isStock() {
        return stock;
    }
    public void setStock(boolean stock) {
        this.stock = stock;
    }
    public String getFhoto() {
        return fhoto;
    }
    public void setFhoto(String fhoto) {
        this.fhoto = fhoto;
    }

    
}
