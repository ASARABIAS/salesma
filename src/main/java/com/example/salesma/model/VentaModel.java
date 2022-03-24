package com.example.salesma.model;

import java.util.Date;

import org.springframework.data.annotation.Id;

public class VentaModel {
    
    @Id
    private long id;
    private long IdCliente;
    private Date Fecha;// cambiar tippo de dato
    private DetalleVenta [] Productos;//{Id del producto, cantidad, precio <- por cada producto}
    private long Total;
    private Estados Estado; //debe, pago

    
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public long getIdCliente() {
        return IdCliente;
    }
    public void setIdCliente(long idCliente) {
        IdCliente = idCliente;
    }
    public Date getFecha() {
        return Fecha;
    }
    public void setFecha(Date fecha) {
        Fecha = fecha;
    }
   
    public DetalleVenta[] getProductos() {
        return Productos;
    }
    public void setProductos(DetalleVenta[] productos) {
        Productos = productos;
    }
    public long getTotal() {
        return Total;
    }
    public void setTotal(long total) {
        Total = total;
    }
    public Estados getEstado() {
        return Estado;
    }
    public void setEstado(Estados estado) {
        Estado = estado;
    }

    
}
