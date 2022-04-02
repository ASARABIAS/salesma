package com.example.salesma.controller;

import com.example.salesma.model.ProductoModel;
import com.example.salesma.service.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/producto")
public class ProductController {
    @Autowired
    ProductoService productoService;
    
    @PostMapping()
    public ProductoModel saveProductoModel(@RequestBody ProductoModel productoModel){
        return productoService.saveProducto(productoModel);
    }
}
