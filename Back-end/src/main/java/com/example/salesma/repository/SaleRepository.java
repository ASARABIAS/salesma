package com.example.salesma.repository;

import java.util.ArrayList;

import com.example.salesma.model.SaleModel;
import com.example.salesma.model.auxiliary.SaleState;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SaleRepository extends MongoRepository<SaleModel, Long> {
    ArrayList<SaleModel> findByIdClient(long id);

    ArrayList<SaleModel> findBySaleState(SaleState saleState);
}
