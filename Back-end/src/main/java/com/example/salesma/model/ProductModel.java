package com.example.salesma.model;

import org.springframework.data.annotation.Id;

public class ProductModel {
    
    @Id
    private long id;
    private String name;
    private double price;
    private boolean stock;

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
    public boolean isStock() {
        return stock;
    }
    public void setStock(boolean stock) {
        this.stock = stock;
    }
}
