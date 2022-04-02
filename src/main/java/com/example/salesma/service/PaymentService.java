package com.example.salesma.service;

import java.util.ArrayList;
import java.util.Optional;

import com.example.salesma.model.PaymentModel;
import com.example.salesma.repository.PaymentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {
    
    @Autowired
    PaymentRepository abono;
    
    public PaymentModel createPayment(PaymentModel abonom){
        return abono.save(abonom);
    }

    public ArrayList<PaymentModel> listPayment(){
        return (ArrayList<PaymentModel>) abono.findAll();
    }

    public Optional<PaymentModel>editPaymentId(Long id){
        return abono.findById(id);
    }

    public void deletePaymentId(Long id){
        abono.deleteById(id);
    }

}
