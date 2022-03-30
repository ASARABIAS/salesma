package com.example.salesma.controller;

import java.util.ArrayList;
import java.util.Optional;

import com.example.salesma.model.AbonoModelo;
import com.example.salesma.service.AbonoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/abono")
public class AbonoController {

    @Autowired
    AbonoService service;

    @PostMapping()
    public AbonoModelo SaveAbono(@RequestBody AbonoModelo abonom) {

        return service.SaveAbono(abonom);
    }
 
    @GetMapping()
    public ArrayList<AbonoModelo> GetAbono(){
        return  service.GetAbono();
    }
    
    @GetMapping(path="/{id}")
    public Optional<AbonoModelo> GetAbonoId(@PathVariable("id") Long id){
        return  service.GetAbonoId(id);
    }
    
    @DeleteMapping(path="/{id}")
    public void DeleteAbonoId(@PathVariable("id") Long id){
          service.DeleteAbonoId(id);
    }
    
}
