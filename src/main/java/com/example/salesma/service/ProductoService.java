package com.example.salesma.service;

import java.util.ArrayList;
import java.util.Optional;

import com.example.salesma.model.ProductoModel;
import com.example.salesma.repository.RepoProducto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductoService {
    
    @Autowired
    RepoProducto productoRepository;

    public ProductoModel saveProducto(ProductoModel productoModel){
        return productoRepository.save(productoModel);
    }

    public ArrayList<ProductoModel> getProducts(){
        return (ArrayList<ProductoModel>)productoRepository.findAll();
    }

    public Optional<ProductoModel> getProductId(long id) {
        return productoRepository.findById(id);
    }

    public void deletProductId(long id) {
        productoRepository.deleteById(id);
    }
}
