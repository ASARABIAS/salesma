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
    private String description;
    private boolean stock;
    private Date creationDate;
    private String fhoto;

    public String getFhoto() {
        return fhoto;
    }
    public void setFhoto(String fhoto) {
        this.fhoto = fhoto;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Date getCreationDate() {
        return creationDate;
    }
    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }
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
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public boolean isStock() {
        return stock;
    }
    public void setStock(boolean stock) {
        this.stock = stock;
    }
}
