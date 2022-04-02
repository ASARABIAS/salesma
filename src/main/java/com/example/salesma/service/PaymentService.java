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
    PaymentRepository paymentRepository;
    
    public PaymentModel createPayment(PaymentModel payment){
        return paymentRepository.save(payment);
    }

    public ArrayList<PaymentModel> listPayment(){
        return (ArrayList<PaymentModel>) paymentRepository.findAll();
    }

    public Optional<PaymentModel>editPaymentId(Long id){
        return paymentRepository.findById(id);
    }

    public void deletePaymentId(Long id){
        paymentRepository.deleteById(id);
    }

    public ArrayList<PaymentModel> searchPaymentName(String name) {
        return (paymentRepository).findByNombre(name);
    }

}
