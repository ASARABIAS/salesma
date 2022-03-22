package com.example.salesma.model;

import org.springframework.data.annotation.Id;

public class ProductoModel {
    
    @Id
    private long Id;
    private String Nombre;
    private double precio;
    private int Unidades;


    public long getId() {
        return Id;
    }
    public void setId(long id) {
        Id = id;
    }
    public String getNombre() {
        return Nombre;
    }
    public void setNombre(String nombre) {
        Nombre = nombre;
    }
    public double getPrecio() {
        return precio;
    }
    public void setPrecio(double precio) {
        this.precio = precio;
    }
    public int getUnidades() {
        return Unidades;
    }
    public void setUnidades(int unidades) {
        Unidades = unidades;
    }

    
}
