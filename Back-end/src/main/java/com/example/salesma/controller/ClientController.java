package com.example.salesma.controller;

import java.util.ArrayList;
import java.util.Optional;

import com.example.salesma.model.ClientModel;
import com.example.salesma.service.ClientService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*",methods = {RequestMethod.POST,RequestMethod.GET,RequestMethod.DELETE,RequestMethod.PUT})
@RequestMapping("/clients")
public class ClientController {

    @Autowired
    ClientService service;

    @PostMapping(path = "/create")
    public ClientModel createClient(@RequestBody ClientModel cliente) {
        return service.createClient(cliente);
    }

    @GetMapping()
    public ArrayList<ClientModel> listClient(){
        return  service.listClient();
    }
    
    
    @PutMapping(path = "/edit/{id}")
    public ClientModel editClientId(@PathVariable("id") Long id,@RequestBody ClientModel cliente){
        return  service.create_editClient(cliente);
    }

    @DeleteMapping(path = "/delete/{id}" )
    public void deleteClientId(@PathVariable("id") Long id){
          service.deleteClientId(id);
    }
    
    @GetMapping(path = "/search/{name}" )
    public ArrayList<ClientModel> searchClientName(@PathVariable("name") String name) {
        return service.searchClientName(name);
    }
    
    @GetMapping(path = "/{id}" )
    public Optional<ClientModel> searchClientId(@PathVariable("id") Long id) {
        return service.searchClientId(id);
    }
    
}