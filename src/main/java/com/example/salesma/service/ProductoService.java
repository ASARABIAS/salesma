package com.example.salesma.service;

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
}
