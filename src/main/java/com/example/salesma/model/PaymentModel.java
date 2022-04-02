package com.example.salesma.model;

import java.util.Date;
import org.springframework.data.annotation.Id;

public class PaymentModel{
    
    @Id
    private long id;
    
    private long idventa;

    public long getIdventa() {
        return this.idventa;
    }

    public void setIdventa(long idventa) {
        this.idventa = idventa;
    }
    private long valor;
    private Date fecha;

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

 

    public long getValor() {
        return this.valor;
    }

    public void setValor(long valor) {
        this.valor = valor;
    }

    public Date getFecha() {
        return this.fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    
}
