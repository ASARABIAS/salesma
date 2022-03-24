package com.example.salesma.repository;

import com.example.salesma.model.ClienteModelo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

<<<<<<< HEAD
@Repository
public interface RepoCliente extends MongoRepository<ClienteModelo, Long>{
=======

@Repository
public interface RepoCliente extends MongoRepository<ClienteModelo,Long> {
>>>>>>> main_abraham
    
}
