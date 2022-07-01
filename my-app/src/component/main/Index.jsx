import React from 'react';
import { useState, useEffect } from 'react';
import Article from '../Article.jsx';
import SectionTitle from '../SectionTitle.jsx';

import getProduct from '../../js/method.js';

const Index = () => {
    const [products, setProducts] = useState([]);
    const [messenger, setMessenger] = useState(['Cargando...']);
    const route='/products';

    useEffect(() =>getProduct.get('http://localhost:8080/products/fisrtstock',setProducts,setMessenger), []);

    const elements = () => {
        if(products.length > 0){
            return products.map((item, index) => {
                return (<Article
                    key={index}
                    route={route}
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

