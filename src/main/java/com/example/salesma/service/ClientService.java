package com.example.salesma.service;

import java.util.ArrayList;
import java.util.Optional;

import com.example.salesma.model.ClientModel;
import com.example.salesma.repository.ClientRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {

    @Autowired
    ClientRepository clienterepo;

    public ClientModel createClient(ClientModel cliente) {

        return clienterepo.save(cliente);
    }

    public ArrayList<ClientModel> listClient(){
        return (ArrayList<ClientModel>) clienterepo.findAll();
    }

    public Optional<ClientModel> editClientId(Long id){
        return clienterepo.findById(id);
    }

    public void deleteClientId(Long id){
        clienterepo.deleteById(id);
    }

    public ArrayList<ClientModel> searchClientName(String name) {
        return clienterepo.findByNombre(name);
    }


}
