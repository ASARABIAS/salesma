package com.example.salesma.service;

import com.example.salesma.model.AbonoModelo;
import com.example.salesma.repository.RepoAbono;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AbonoService {
    
    @Autowired
    RepoAbono abono;
    
    public AbonoModelo SaveAbono(AbonoModelo abonom){
        return abono.save(abonom);
    }
}
