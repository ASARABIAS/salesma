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

    //Listar
    public ArrayList<ProductModel> listProducts(){
        return (ArrayList<ProductModel>)productRepository.findAll();
    }

    //Crear y editar Producto
    public ProductModel create_editProducto(ProductModel productModel){
        return productRepository.save(productModel);
    }

    //Elimiar producto
    public void deleteProductId(long id) {
        productRepository.deleteById(id);
    }

    //buscar producto x id
    public Optional<ProductModel> searchProductId(long id) {
        return productRepository.findById(id);
    }

    //buscar x nombre
    public ArrayList<ProductModel> searchProductName(String name) {
        return productRepository.findByName(name);
    }
}
