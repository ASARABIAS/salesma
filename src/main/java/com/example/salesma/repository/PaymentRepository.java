package com.example.salesma.repository;

import java.util.ArrayList;

import com.example.salesma.model.PaymentModel;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends MongoRepository<PaymentModel,Long>{
    ArrayList<PaymentModel> findByidventa(long idventa);
}
