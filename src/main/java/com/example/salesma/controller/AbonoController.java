package com.example.salesma.controller;

import com.example.salesma.model.AbonoModelo;
import com.example.salesma.service.AbonoService;

import org.springframework.beans.factory.annotation.Autowired;
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
 
    
}
