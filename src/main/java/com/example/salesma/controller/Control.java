package com.example.salesma.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class Control {

    @GetMapping(value="/")
    public String hola() {
        return "hola a todos";
    }
    
    @GetMapping(value="/bienvenida")
    public String bienvenida() {
        return "Bienvenido a mi api";
    }
    
}