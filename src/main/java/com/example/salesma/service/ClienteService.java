package com.example.salesma.service;

import java.util.ArrayList;
import java.util.Optional;

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

    public ArrayList<ClienteModelo> GetCliente(){
        return (ArrayList<ClienteModelo>) clienterepo.findAll();
    }

    public Optional<ClienteModelo> GetClienteId(Long id){
        return clienterepo.findById(id);
    }

    public void DeleteClienteId(Long id){
        clienterepo.deleteById(id);
    }
}
