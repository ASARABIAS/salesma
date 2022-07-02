import React from 'react';
import { useState, useEffect,  useRef  } from 'react';
import Article from '../../Article.jsx';
import SectionTitle from '../../SectionTitle.jsx';
import {get,delet} from '../../../service/methodApi'
import { useNavigate } from 'react-router';

const Product = (props) => {
    const [products, setProducts] = useState([]);
    const [messenger, setMessenger] = useState('Cargando...');
    const navigate = useNavigate();
    const route='products';

    useEffect(() => {
        get(route)
        .then(data=>setProducts(data))
        .catch(()=>setMessenger('Error al cargar. Buscar al Programador 👀👀👀'))
    }, []);


    const elements = () => {
        if(products.length > 0){
            return products.map((item, index) => {
                return (<Article
                    key={index}
                    route={`/${route}`}
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
        delet(route,'product')
        .then(()=>navigate('/products'))
        .catch(()=>setMessenger('Error al cargar. Buscar al Programador 👀👀👀'))
    }

    return (
        <main>
            <section className="container" id="container-product">
                <SectionTitle name={"Productos"} route={`/${route}`}/>
                <div className="container-bottom">
                    {elements()}
                </div>
            </section>
        </main>
    );
}



export default Product;
