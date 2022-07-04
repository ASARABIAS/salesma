import React, {useState,useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { delet, get} from '../../../service/methodApi';

const DetailClient = () => {
    const [client, setClient] = useState({});
    const [messenger, setMessenger] = useState('');
    const navegate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        get(`clients/${id}`)
        .then(data => setClient(data))
        .catch(()=>setMessenger('Error al cargar. Buscar al Programador 👀👀👀'));
    }, []);

    const conformDelete = () => {
        setMessenger('Cargando...');
        delet(`clients/delete/${id}`,'producto')
        .then(()=>navegate('/clients'));
    }

    return (
        <main>
            <div className="container-top">
                <h2>Crear Cliente</h2>
            </div>
            <div className="container-bottom">
                <div className="form">
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" name="name" id="name" placeholder="Nombre"  value={client.name} disabled/>
                    </div>
                    <div>
                        <label htmlFor="lastname">Apellidos:</label>
                        <input type="text" name="lastname" id="lastname" placeholder="Apellidos" value={client.lastname} disabled />
                    </div>
                    <div>
                        <label htmlFor="address">Direccion:</label>
                        <input type="text" name="address" id="address" placeholder="Direccion" value={client.address} disabled/>
                    </div>
                    <div>
                        <label htmlFor="phone">Telefono:</label>
                        <input type="number" name="phone" id="phone" placeholder="Telefono"  value={client.phone} disabled/>
                    </div>
                    <div>
                        <small className='messenger'>{messenger}</small>
                    </div>
                    <div className="form-buttons">
                        <button onClick={conformDelete}>Eliminar</button>
                        <button><Link to={`/clients/update/${id}`}>Editar</Link> </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default DetailClient;
