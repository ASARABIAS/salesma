package com.example.salesma.repository;

import com.example.salesma.model.ProductoModel;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepoProducto extends MongoRepository<ProductoModel,Long> {
    
}
