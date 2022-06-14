import React from 'react';
import { useState, useEffect } from 'react';
import Article from '../../Article.jsx';
import SectionTitle from '../../SectionTitle.jsx';

const Product = () => {
    const [products, setProducts] = useState([]);
    const route='/products';

    useEffect(() => {
        fetch('http://localhost:8080/products', {
            'mode': 'cors',
            'headers': {
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);

    return (
        <main>
            <section className="container" id="container-product">
                <SectionTitle name={"Productos"} route={route}/>
                <div className="container-bottom">
                    {products.map((item, index) => {
                        return (<Article
                            key={index}
                            route={route}
                            {...item}
                        />);
                    })}
                </div>
            </section>
        </main>
    );
}



export default Product;
