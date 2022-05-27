package com.example.salesma.service;

import java.util.ArrayList;
import java.util.Optional;

import com.example.salesma.model.SaleModel;
import com.example.salesma.repository.SaleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SaleService {

    @Autowired
    SaleRepository saleRepository;

    public ArrayList<SaleModel> listSales(){
        return (ArrayList<SaleModel>)saleRepository.findAll();
    }

    public SaleModel createSale(SaleModel saleModel){
        return saleRepository.save(saleModel);
    }

    public Optional<SaleModel> editSaleId(long id) {
        return saleRepository.findById(id);
    }

    public void deleteSaleId(long id) {
        saleRepository.deleteById(id);
    }
}
