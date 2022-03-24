package com.example.salesma.repository;

import com.example.salesma.model.AbonoModelo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepoAbono extends MongoRepository<AbonoModelo,Long>{
    
}
