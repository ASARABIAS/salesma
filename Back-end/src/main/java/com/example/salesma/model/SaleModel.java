package com.example.salesma.model;

import java.util.Date;

import com.example.salesma.model.auxiliary.SaleDetail;
import com.example.salesma.model.auxiliary.SaleState;

import org.springframework.data.annotation.Id;

public class SaleModel {

    @Id
    private long id;
    private long idClient;
    private String nombreCliente;
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
        return idClient;
    }
    public void setIdClient(long idClient) {
        this.idClient = idClient;
    }
    public String getNombreCliente() {
        return nombreCliente;
    }
    public void setNombreCliente(String nombreCliente) {
        this.nombreCliente = nombreCliente;
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