package com.example.salesma.repository;

import com.example.salesma.model.ProductModel;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends MongoRepository<ProductModel,Long> {
    
}
