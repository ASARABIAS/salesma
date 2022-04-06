package com.example.salesma.service;

import java.util.ArrayList;
import java.util.Optional;

import com.example.salesma.model.ProductModel;
import com.example.salesma.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    // listar
    public ArrayList<ProductModel> listProducts() {
        return (ArrayList<ProductModel>) productRepository.findAll();
    }

    // Crear y editar
    public ProductModel create_editProducto(ProductModel productModel) {
        return productRepository.save(productModel);
    }

    // Eliminar
    public void deleteProductId(long id) {
        productRepository.deleteById(id);
    }

    // Buscar x ID
    public Optional<ProductModel> searchProductId(long id) {
        return productRepository.findById(id);
    }


    // Buscar x nombre
    public ArrayList<ProductModel> searchProductParams(String params) {

        try{
            String campo = params.split("=")[0];
            String valor =params.split("=")[1];
            switch(campo){
                case "name":return productRepository.findByName(valor);
                case "stock":
                boolean aux;
                if(valor.equals("0")){
                    aux=false;
                }else{
                    aux=true;
                }
                return productRepository.findByStock(aux);
            }
        }
        catch (NumberFormatException ex){
            ex.printStackTrace();
        }
        return null;
    }
}
