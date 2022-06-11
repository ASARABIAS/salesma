package com.example.salesma.controller;

import java.util.ArrayList;
import java.util.Optional;

import com.example.salesma.model.ProductModel;
import com.example.salesma.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*",methods = {RequestMethod.POST,RequestMethod.GET,RequestMethod.DELETE,RequestMethod.PUT})
@RequestMapping("/products")
public class ProductController {
    @Autowired
    ProductService productService;
    //listar productos
    @GetMapping
    public ArrayList<ProductModel> listProducts(){
        return productService.listProducts();
    }

    //buscar x ID
    @GetMapping(path = "/{id}")
    public Optional<ProductModel> searchProductId(@PathVariable("id") long id) {
        return productService.searchProductId(id);
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

    //buscar x params
    @GetMapping(path = "/search/{params}" )
    public ArrayList<ProductModel> searchProductName(@PathVariable("params") String params) {
        return productService.searchProductParams(params);
    }

}
