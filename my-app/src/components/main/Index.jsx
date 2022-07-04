import React from 'react';
import { useState, useEffect } from 'react';
import Article from '../Article.jsx';
import SectionTitle from '../SectionTitle.jsx';
import { delet, get } from '../../service/methodApi.js';
import { Navigate } from 'react-router-dom';
import ArticleSales from '../main/sale/Articles';

const Index = () => {
    const [products, setProducts] = useState([]);
    const [sales, setSales] = useState([]);
    const [messenger, setMessenger] = useState('Cargando...');
    const [messengerSales, setMessengerSales] = useState('Cargando...');
    const route = 'products';

    useEffect(() => {
        get(`${route}/fisrtstock`)
            .then(data => data.length > 0 ? setProducts(data) : setMessenger('No hay 😑😑😑'))
            .catch(() => setMessenger('Error al cargar. Buscar al Programador 👀👀👀'));
        get(`sales/fisrtstock`)
            .then(data => data.length > 0 ? setSales(data) : setMessengerSales('No hay 😑😑😑'))
            .catch(() => setMessenger('Error al cargar. Buscar al Programador 👀👀👀'));
    }, []);

    const conformDelete = (id) => {
        setMessenger('Cargando...');
        delet(`${route}/delete/${id}`, 'venta')
            .then(() => Navigate('/'))
            .catch(() => setMessenger('Error al cargar. Buscar al Programador 👀👀👀'))
    }

    const conformDeleteSales = (id) => {
        setMessengerSales('Cargando...');
        delet(`${route}/delete/${id}`, 'venta')
            .then(() => Navigate('/'))
            .catch(() => setMessengerSales('Error al cargar. Buscar al Programador 👀👀👀'))
    }

    const elements = () => {
        if (products.length > 0) {
            return products.map((item, index) => {
                return (<Article
                    key={index}
                    route={'/' + route}
                    {...item}
                    delete={() => conformDelete(item.id)}
                />);
            });
        } else {
            return <p>{messenger}</p>;
        }

    }

    const elementsSales= ()=>{
        if (sales.length > 0) {
            return products.map((item, index) => {
                return (<ArticleSales
                    key={index}
                    route={'/' + route}
                    {...item}
                    delete={() => conformDeleteSales(item.id)}
                />);
            });
        } else {
            return <p>{messengerSales}</p>;
        }
    }

    return (
        <main>
            <section className="container" id="container-product">
                <SectionTitle name={"Top 5 de los productos mas Antiguos"} />
                <div className="container-bottom">
                    {elements()}
                </div>
                <SectionTitle name={"Top 5 de las Ventas mas Antiguos"} />
                <div className="container-bottom">
                    {elementsSales()}
                </div>
            </section>
        </main>
    );
}

export default Index;

