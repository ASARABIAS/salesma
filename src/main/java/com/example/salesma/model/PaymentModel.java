package com.example.salesma.model;

import java.util.Date;
import org.springframework.data.annotation.Id;

public class AbonoModelo {
    
    @Id
    private long id;
    
    private long id_venta;
    private long valor;
    private Date fecha;

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getId_venta() {
        return this.id_venta;
    }

    public void setId_venta(long id_venta) {
        this.id_venta = id_venta;
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
