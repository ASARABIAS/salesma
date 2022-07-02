import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Article from './Articles.jsx';
import SectionTitle from '../../SectionTitle.jsx';
import { get, delet } from '../../../service/methodApi'
import { useNavigate } from 'react-router';

const Sales = (props) => {
    const [sales, setSales] = useState([]);
    const [debe, setDebe] = useState([]);
    const [messenger, setMessenger] = useState('Cargando...');
    const navigate = useNavigate();
    const route = 'sales';

    useEffect(() => {
        get(route)
            .then(data => {
                setSales(data);
                setDebe(data.filter(item => item.saleState === 'Debe'));
            })
            .catch(() => setMessenger('Error al cargar. Buscar al Programador 👀👀👀'))
    }, []);


    const elements = () => {
        if (sales.length > 0) {
            return sales.map((item, index) => {
                return (<Article
                    key={index}
                    route={`/${route}`}
                    {...item}
                    delete={() => conformDelete(item.id)}
                />);
            });
        } else {
            return <p>{messenger}</p>;
        }

    }

    const conformDelete = (id) => {
        setMessenger('Cargando...');
        delet(route, 'venta')
            .then(() => navigate('/sales'))
            .catch(() => setMessenger('Error al cargar. Buscar al Programador 👀👀👀'))
    }

    return (
        <main>
            <section className="container" id="container-product">
                <SectionTitle name={"por cobrar"} route={`/${route}`} />
                <div className="container-bottom">
                    <strong>$689.000</strong>
                    <p>{ }</p>
                </div>
            </section>

            <section className="container" id="container-product">
                <SectionTitle name={"ventas realizadas"} />
                <div className="container-bottom">
                    {elements()}
                </div>
            </section>
        </main>
    );
}



export default Sales;