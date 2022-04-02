package com.example.salesma.controller;

import com.example.salesma.model.ProductModel;
import com.example.salesma.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    ProductService productService;
    
    @PostMapping()
    public ProductModel saveProductoModel(@RequestBody ProductModel productModel){
        return productService.createProducto(productModel);
    }
}
