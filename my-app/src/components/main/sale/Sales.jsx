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
                setDebe(data.filter(item => item.saleState == 'Debe'));
                setSales(data);
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
    const contidad = () => {
        let sum = 0;
        debe.forEach(item => sum = sum + item.saleDetail.total);
        return sum;
    }

    return (
        <main>
            <section className="container" id="container-product">
                <SectionTitle name={"por cobrar"} route={`/${route}`} />
                <div className="container-bottom">
                    <strong>{`$${contidad()}`}</strong>
                    <p>{`${debe.length} clientes`} </p>
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