package com.example.salesma.model;

import java.util.Date;
import org.springframework.data.annotation.Id;

public class PaymentModel{
    
    @Id
    private long id;
    
    private long idsale;
    private double value;
    private Date date;

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getIdsale() {
        return this.idsale;
    }

    public void setIdsale(long idsale) {
        this.idsale = idsale;
    }

    public double getValue() {
        return this.value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public Date getDate() {
        return this.date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

   

    
}
