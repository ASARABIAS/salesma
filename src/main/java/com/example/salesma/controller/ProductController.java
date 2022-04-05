package com.example.salesma.controller;

import java.util.ArrayList;
import java.util.Optional;

import com.example.salesma.model.ProductModel;
import com.example.salesma.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    ProductService productService;
    //listar productos
    @GetMapping
    public ArrayList<ProductModel> listProducts(){
        return productService.listProducts();
    }

    //crear producto
    @GetMapping(path = "/create")
    public void createProduct() {
        //retornar vista
    }
    @PostMapping(path = "/create")
    public ProductModel createProduct(@RequestBody ProductModel productModel){
        return productService.create_editProducto(productModel);
    }

    //editar producto
    @GetMapping(path = "/edit/{id}")
    public Optional<ProductModel> editProduct(@PathVariable("id") long id) {
        return productService.searchProductId(id);
    }
    @PutMapping(path = "/edit/{id}")
    public ProductModel editProduct(@PathVariable("id") long id, @RequestBody ProductModel productModel){
        return productService.create_editProducto(productModel);
    }

    //eliminar producto
    @DeleteMapping(path = "/delete/{id}" )
    public void deleteProduct(@PathVariable("id") long id) {
        productService.deleteProductId(id);
    }

    //buscar x ID
    @GetMapping(path = "/search/{id}" )
    public Optional<ProductModel> searchProductID(@PathVariable("id") long id) {
        return productService.searchProductId(id);
    }
 
    //buscar x Nombre
    @GetMapping(path = "/search/{name}" )
    public ArrayList<ProductModel> searchProductName(@PathVariable("name") String name) {
        return productService.searchProductName(name);
    }

}
