import React from 'react';
import { useState, useEffect,  useRef  } from 'react';
import Article from '../../Article.jsx';
import SectionTitle from '../../SectionTitle.jsx';
import method from '../../../js/method.js';

const Product = (props) => {
    const [products, setProducts] = useState([]);
    const [messenger, setMessenger] = useState(['Cargando...']);
    const route='/products';

    useEffect(() => method.get('http://localhost:8080/products',setProducts,setMessenger), []);

    const elements = () => {
        if(products.length > 0){
            return products.map((item, index) => {
                return (<Article
                    key={index}
                    route={route}
                    {...item}
                    delete={()=>conformDelete(item.id)}
                />);
            });
        }else{
            return <p>{messenger}</p>;
        }
        
    }

    const conformDelete = (id) => {
        setMessenger('Cargando...');
        const rta = method.delete(` el producto # ${id}`, `http://localhost:8080/products/delete/${id}`,setMessenger)
        
        if(rta){
            props.history.push('/products');
        }
    }

    return (
        <main>
            <section className="container" id="container-product">
                <SectionTitle name={"Productos"} route={route}/>
                <div className="container-bottom">
                    {elements()}
                </div>
            </section>
        </main>
    );
}



export default Product;
