package com.example.salesma.service;

import com.example.salesma.model.ClienteModelo;
import com.example.salesma.repository.RepoCliente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

    @Autowired
    RepoCliente clienterepo;

    public ClienteModelo SaveCliente(ClienteModelo cliente) {

        return clienterepo.save(cliente);
    }
}
