package com.example.salesma.model.auxiliary;

public class SaleDetail {
    private long idProduct;
    private String nombre;
    private int quantity;
    private double total;

    
    public long getIdProduct() {
        return idProduct;
    }
    public void setIdProduct(long idProduct) {
        this.idProduct = idProduct;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public double getTotal() {
        return total;
    }
    public void setTotal(double total) {
        this.total = total;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    
    
}
