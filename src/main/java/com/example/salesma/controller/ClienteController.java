package com.example.salesma.controller;

import com.example.salesma.model.ClienteModelo;
import com.example.salesma.service.ClienteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

    @Autowired
    ClienteService service;

    @PostMapping()
    public ClienteModelo SaveCliente(@RequestBody ClienteModelo cliente) {

        return service.SaveCliente(cliente);
    }
 
    
}