import React, {useState,useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { delet, get, put} from '../../../service/methodApi';

const UpdateClient = () => {
    const [client, setClient] = useState({});
    const [messenger, setMessenger] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        get(`clients/${id}`)
        .then(data => setClient(data))
        .catch(()=>setMessenger('Error al cargar. Buscar al Programador 👀👀👀'));
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setClient({ ...client, [name]: value });
    };

    const conformUpdate = async () => {
        setMessenger('Cargando...');
        console.log(client);
        put(`clients/edit/${id}`,client)
        .then(()=>navigate('/clients'))
        .catch(()=>setMessenger('Error al cargar. Buscar al Programador 👀👀👀'))
        
    }

    return (
        <main>
            <div className="container-top">
                <h2>Editando {client.name}</h2>
            </div>
            <div className="container-bottom">
                <div className="form">
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" name="name" id="name" placeholder="Nombre"  value={client.name}  onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="lastname">Apellidos:</label>
                        <input type="text" name="lastname" id="lastname" placeholder="Apellidos" value={client.lastname} onChange={handleChange}  />
                    </div>
                    <div>
                        <label htmlFor="address">Direccion:</label>
                        <input type="text" name="address" id="address" placeholder="Direccion" value={client.address} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="phone">Telefono:</label>
                        <input type="number" name="phone" id="phone" placeholder="Telefono"  value={client.phone} onChange={handleChange}/>
                    </div>
                    <div>
                        <small className='messenger'>{messenger}</small>
                    </div>
                    <div className="form-buttons">
                        <button onClick={conformUpdate}>Editar</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default UpdateClient;
