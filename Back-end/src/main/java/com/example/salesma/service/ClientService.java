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

    public ArrayList<ClientModel> listClient() {
        return (ArrayList<ClientModel>) clienterepo.findAll();
    }

    // Crear y editar

    public ClientModel create_editClient(ClientModel clientModel) {
        return clienterepo.save(clientModel);
    }

    public void deleteClientId(Long id) {
        clienterepo.deleteById(id);
    }

    public ArrayList<ClientModel> searchClientName(String name) {
        return clienterepo.findByName(name);
    }

    // Buscar x ID
    public Optional<ClientModel> searchClientId(long id) {
        return clienterepo.findById(id);
    }

    public long[] nameClientToIds(String name) {

        ArrayList<ClientModel> clientsModel = clienterepo.findByName(name);
        int sizeClientsModel = clientsModel.size();
        ClientModel auxClientModel;
        long[] aux = new long[sizeClientsModel];

        for (int i = 0; i < sizeClientsModel; i++) {
            auxClientModel = clientsModel.get(i);
            aux[i] = auxClientModel.getId();
        }
        return aux;
    }

}
