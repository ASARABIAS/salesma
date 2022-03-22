package com.example.salesma.model;

public class DetalleVenta {
    private long IdProducto;
    private int Cantidad;
    private double Precio;
    
    public long getIdProducto() {
        return IdProducto;
    }
    public void setIdProducto(long idProducto) {
        IdProducto = idProducto;
    }
    public int getCantidad() {
        return Cantidad;
    }
    public void setCantidad(int cantidad) {
        Cantidad = cantidad;
    }
    public double getPrecio() {
        return Precio;
    }
    public void setPrecio(double precio) {
        Precio = precio;
    }
}
