package com.example.salesma.model;

import org.springframework.data.annotation.Id;

public class ProductoModel {
    
    @Id
    private long id;
    private String nombre;
    private int precio;
    private int unidades;

    public long getId() {
        return id;
    }
    public void setId() {
        this.id = 20;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public int getPrecio() {
        return precio;
    }
    public void setPrecio(int precio) {
        this.precio = precio;
    }
    public int getUnidades() {
        return unidades;
    }
    public void setUnidades(int unidades) {
        this.unidades = unidades;
    }


    

    
}
