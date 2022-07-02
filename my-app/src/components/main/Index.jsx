import React from 'react';
import { useState, useEffect } from 'react';
import Article from '../Article.jsx';
import SectionTitle from '../SectionTitle.jsx';
import {get} from '../../service/methodApi.js';

const Index = () => {
    const [products, setProducts] = useState([]);
    const [messenger, setMessenger] = useState('Cargando...');
    const route='products';

    useEffect(() =>{
        get(`${route}/fisrtstock`)
        .then(data=>setProducts(data))
        .catch(()=>setMessenger('Error al cargar. Buscar al Programador 👀👀👀'));
    }, []);

    const elements = () => {
        if(products.length > 0){
            return products.map((item, index) => {
                return (<Article
                    key={index}
                    route={'/'+route}
                    {...item}
                />);
            });
        }else{
            return <p>{messenger}</p>;
        }
        
    }

    return (
        <main>
            <section className="container" id="container-product">
                <SectionTitle name={"Top 5 de los productos mas Antiguos"} />
                <div className="container-bottom">
                    {elements()}
                </div>
            </section>
        </main>
    );
}

export default Index;

