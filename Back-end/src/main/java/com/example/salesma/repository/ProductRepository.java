package com.example.salesma.repository;

import java.util.ArrayList;

import com.example.salesma.model.ProductModel;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends MongoRepository<ProductModel,Long> {

    ArrayList<ProductModel> findByName(String name);

    ArrayList<ProductModel> findByStock(boolean stock);

    //ArrayList<ProductModel> findTop5OrderByDateofcreation();

    ArrayList<ProductModel> findTop5ByStockOrderByDateofcreationAsc(boolean stock);
}
