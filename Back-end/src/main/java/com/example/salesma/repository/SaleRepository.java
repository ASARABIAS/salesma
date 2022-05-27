package com.example.salesma.repository;

import com.example.salesma.model.SaleModel;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SaleRepository extends MongoRepository<SaleModel, Long>{
    
}
