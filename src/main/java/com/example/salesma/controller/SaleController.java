package com.example.salesma.controller;

import java.util.ArrayList;
import java.util.Optional;

import com.example.salesma.model.SaleModel;
import com.example.salesma.service.SaleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sales")
public class SaleController {

    @Autowired
    SaleService saleService;

    //listar ventas
    @GetMapping
    public ArrayList<SaleModel> listSales(){
        return saleService.listSales();
    }

    //crear producto
    @GetMapping(path = "/create")
    public void createSale() {
        //retornar vista
    }
    @PostMapping(path = "/create")
    public SaleModel createProduct(@RequestBody SaleModel saleModel){
        return saleService.createSale(saleModel);
    }

     //editar producto
    @GetMapping(path = "/edit/{id}")
    public Optional<SaleModel> editSale(@PathVariable("id") long id) {
        return saleService.editSaleId(id);
    }
    @PutMapping(path = "/edit/{id}")
    public void editSale(@PathVariable("id") long id, @RequestBody SaleModel saleModel){
        //aguardamos y redireccionamos a productos
    }

    //eliminar producto
    @DeleteMapping(path = "/delete/{id}" )
    public void deleteSale(@PathVariable("id") long id) {
        saleService.deleteSaleId(id);
    }
}