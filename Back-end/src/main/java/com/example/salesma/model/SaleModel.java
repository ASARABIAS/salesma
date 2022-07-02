package com.example.salesma.model;

import java.util.Date;

import com.example.salesma.model.auxiliary.SaleDetail;
import com.example.salesma.model.auxiliary.SaleState;

import org.springframework.data.annotation.Id;

public class SaleModel {

    @Id
    private long id;
    private long IdClient;
    private Date date;// cambiar tippo de dato
    private SaleDetail saleDetail;
    private SaleState saleState; // debe, pago
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public long getIdClient() {
        return IdClient;
    }
    public void setIdClient(long idClient) {
        IdClient = idClient;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    public SaleDetail getSaleDetail() {
        return saleDetail;
    }
    public void setSaleDetail(SaleDetail saleDetail) {
        this.saleDetail = saleDetail;
    }
    public SaleState getSaleState() {
        return saleState;
    }
    public void setSaleState(SaleState saleState) {
        this.saleState = saleState;
    }
    


    
}