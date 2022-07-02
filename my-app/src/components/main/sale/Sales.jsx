import React from 'react';
import { useState, useEffect,  useRef  } from 'react';
import Article from '../sale/Articles.jsx';
import SectionTitle from '../../SectionTitle.jsx';
import method from '../../../js/method.js';

const Product = (props) => {
    const [sales, setSales] = useState([]);
    const [messenger, setMessenger] = useState(['Cargando...']);
    const route='/sales';

    useEffect(() => method.get('http://localhost:8080/sales',setSales,setMessenger), []);

    const elements = () => {
        if(sales.length > 0){
            return sales.map((item, index) => {
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
        const rta = method.delete(` La venta # ${id}`, `http://localhost:8080/sales/delete/${id}`,setMessenger)
        
        if(rta){
            props.history.push('/sales');
        }
    }

    return (
        <main>
              <section className="container" id="container-product">
                <SectionTitle name={"por cobrar"} route={route}/>
                <div className="container-bottom">
                    <strong>$689.000</strong>
                    <p>12 clientes</p>
                </div>
            </section>

            <section className="container" id="container-product">
                <SectionTitle name={"ventas realizadas"}/>
                <div className="container-bottom">
                    {elements()}
                </div>
            </section>
        </main>
    );
}



export default Product;