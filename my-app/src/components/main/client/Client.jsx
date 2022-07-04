import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { delet, get } from '../../../service/methodApi';
import Article from './Article';
import SectionTitle from '../../SectionTitle';

const Client = () => {
    const [clients, setClients] = useState([]);
    const [messenger, setMessenger] = useState('Cargando...');
    const navigate = useNavigate();
    const route = 'clients';

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        get(route)
            .then(data => data.length > 0 ? setClients(data) : setMessenger('No hay productos 😑😑😑'))
            .catch(() => setMessenger('Error al cargar. Buscar al Programador 👀👀👀'))
    }

    const elements = () => {
        if (clients.length > 0) {
            return clients.map((item, index) => {
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
        delet(`${route}/delete/${id}`, 'cliente')
            .then(() => getData())
            .catch(() => setMessenger('Error al cargar. Buscar al Programador 👀👀👀'))
    }

    return (
        <main>
            <section className="container" id="container-product">
                <SectionTitle name={"Clientes"} route={`/${route}`} />
                <div className="container-bottom">
                    {elements()}
                </div>
            </section>
        </main>
    );
}

export default Client;
