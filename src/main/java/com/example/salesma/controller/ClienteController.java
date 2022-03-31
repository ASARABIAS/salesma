package com.example.salesma.controller;

import java.util.ArrayList;
import java.util.Optional;
import java.util.OptionalDouble;

import com.example.salesma.model.ClienteModelo;
import com.example.salesma.service.ClienteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping()
    public ArrayList<ClienteModelo> GetCliente(){
        return  service.GetCliente();
    }
    
    @GetMapping(path="/{id}")
    public Optional<ClienteModelo> GetClienteId(@PathVariable("id") Long id){
        return  service.GetClienteId(id);
    }
    @DeleteMapping(path="/{id}")
    public void DeleteClienteId(@PathVariable("id") Long id){
          service.DeleteClienteId(id);
    }
 
    
}