package com.example.salesma.service;

import java.util.ArrayList;
import java.util.Optional;

import com.example.salesma.model.ClientModel;
import com.example.salesma.model.SaleModel;
import com.example.salesma.model.auxiliary.SaleState;
import com.example.salesma.repository.SaleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SaleService {

    @Autowired
    SaleRepository saleRepository;
    ClientService clientService;

    public ArrayList<SaleModel> listSales(){
        return (ArrayList<SaleModel>)saleRepository.findAll();
    }

    public SaleModel create_editSale(SaleModel saleModel){
        return saleRepository.save(saleModel);
    }

    public Optional<SaleModel> searchSaleId(long id) {
        return saleRepository.findById(id);
    }

    public void deleteSaleId(long id) {
        saleRepository.deleteById(id);
    }

    public ArrayList<SaleModel> searchSaleParams(String params) {

        try{
            String campo = params.split("=")[0];
            String valor =params.split("=")[1];

            switch(campo){
                case "idClient":return saleRepository.findByIdClient(Integer.parseInt(valor));
                case "saleState":return saleRepository.findBySaleState(SaleState.valueOf(valor));
                case "nameClient": return searchByNameClient(valor);
            }
        }
        catch (NumberFormatException ex){
            ex.printStackTrace();
        }
        return null;
    }

    public ArrayList<SaleModel> searchByNameClient(String name){

        long [] idClientModel = clientService.nameClientToIds(name);
        ArrayList<SaleModel> auxSaleModel=new ArrayList<SaleModel>();

        for(int i=0;i<idClientModel.length;i++){
            auxSaleModel.add(saleRepository.findById(idClientModel[i]).get());
        }

        return auxSaleModel;
    }
}
