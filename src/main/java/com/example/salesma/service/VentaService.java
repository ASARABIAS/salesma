package com.example.salesma.service;

import com.example.salesma.model.VentaModel;
import com.example.salesma.repository.RepoVenta;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VentaService {

    @Autowired
    RepoVenta ventarepo;

    public VentaModel SaveVenta(VentaModel venta) {

        return ventarepo.save(venta);
    }
}
