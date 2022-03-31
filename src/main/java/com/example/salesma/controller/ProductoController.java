package com.example.salesma.controller;

import java.util.ArrayList;
import java.util.Optional;

import com.example.salesma.model.ProductoModel;
import com.example.salesma.service.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/producto")
public class ProductoController {
    @Autowired
    ProductoService productoService;
    
    @PostMapping()
    public ProductoModel saveProductoModel(@RequestBody ProductoModel productoModel){
        return productoService.saveProducto(productoModel);
    }

    @GetMapping
    public ArrayList<ProductoModel> getProducts(){
        return productoService.getProducts();
    }

    @GetMapping(path = "/{id}" )
    public Optional<ProductoModel> getProduct(@PathVariable("id") long id) {
        return productoService.getProductId(id);
    }

    @DeleteMapping(path = "/{id}" )
    public void deletProduct(@PathVariable("id") long id) {
        productoService.deletProductId(id);
    }

}
