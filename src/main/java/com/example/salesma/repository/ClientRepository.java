package com.example.salesma.repository;


import com.example.salesma.model.ClientModel;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends MongoRepository<ClientModel, Long>{
    
}
