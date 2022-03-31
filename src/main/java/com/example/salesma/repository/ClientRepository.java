package com.example.salesma.repository;

import com.example.salesma.model.ClienteModelo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends MongoRepository<ClienteModelo, Long>{
    
}
