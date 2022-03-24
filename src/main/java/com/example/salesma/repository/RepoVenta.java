package com.example.salesma.repository;

import com.example.salesma.model.VentaModel;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepoVenta extends MongoRepository<VentaModel, Long>{
    
}
