
import React from 'react';
import { useState, useEffect } from 'react';
import Article from '../Article.jsx';
import SectionTitle from '../SectionTitle.jsx';

const Index = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/products/fisrtstock', {
            'mode': 'cors',
            'headers': {
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log("data: ", data);
                setProducts(data);
            });
    }, []);

    return (
        <main>
            <section className="container" id="container-product">
                <SectionTitle name={"Top 5 de los productos mas Antiguos"} />
                <div className="container-bottom">
                    {products.map((item, index) => {
                        return (<Article
                            key={index}
                            route={'/products'}
                            {...item}
                        />);
                    })}
                </div>
            </section>
        </main>
    );
}

export default Index;

