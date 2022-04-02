package com.example.salesma.controller;

import java.util.ArrayList;
import java.util.Optional;

import com.example.salesma.model.PaymentModel;
import com.example.salesma.service.PaymentService;

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
public class PaymentController {

    @Autowired
    PaymentService service;

    @PostMapping()
    public PaymentModel createPayment(@RequestBody PaymentModel abonom) {

        return service.createPayment(abonom);
    }
 
    @GetMapping()
    public ArrayList<PaymentModel> listPayment(){
        return  service.listPayment();
    }
    
    @GetMapping(path="/{id}")
    public Optional<PaymentModel> editPaymentId(@PathVariable("id") Long id){
        return  service.editPaymentId(id);
    }
    
    @DeleteMapping(path="/{id}")
    public void deletePaymentId(@PathVariable("id") Long id){
          service.deletePaymentId(id);
    }
    
}
