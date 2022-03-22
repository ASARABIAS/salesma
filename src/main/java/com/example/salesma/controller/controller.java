package com.example.salesma.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class controller {
    
    @GetMapping("/")
    public String abono() {
        return "index";
    }
}