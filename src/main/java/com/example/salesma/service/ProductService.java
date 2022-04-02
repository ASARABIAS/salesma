package com.example.salesma.service;

import java.util.ArrayList;
import java.util.Optional;

import com.example.salesma.model.ProductModel;
import com.example.salesma.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    
    @Autowired
    ProductRepository productRepository;


    public ArrayList<ProductModel> listProducts(){
        return (ArrayList<ProductModel>)productRepository.findAll();
    }

    public ProductModel createProducto(ProductModel productModel){
        return productRepository.save(productModel);
    }

    public Optional<ProductModel> editProductId(long id) {
        return productRepository.findById(id);
    }

    public void deleteProductId(long id) {
        productRepository.deleteById(id);
    }

    public ArrayList<ProductModel> searchProductName(String name) {
        return productRepository.findByName(name);
    }
}
