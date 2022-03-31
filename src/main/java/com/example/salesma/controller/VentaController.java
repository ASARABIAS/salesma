package com.example.salesma.controller;

import com.example.salesma.model.VentaModel;
import com.example.salesma.service.VentaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/venta")
public class VentaController {

    @Autowired
    VentaService service;

    @PostMapping()
    public VentaModel SaveVenta(@RequestBody VentaModel venta) {

        return service.SaveVenta(venta);
    }

    
 
    
}