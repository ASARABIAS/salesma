package com.example.salesma.service;

import java.util.ArrayList;
import java.util.Optional;

import javax.lang.model.util.AbstractAnnotationValueVisitor7;

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

    public ArrayList<AbonoModelo> GetAbono(){
        return (ArrayList<AbonoModelo>) abono.findAll();
    }

    public Optional<AbonoModelo> GetAbonoId(Long id){
        return abono.findById(id);
    }

    public void DeleteAbonoId(Long id){
        abono.deleteById(id);
    }
}
