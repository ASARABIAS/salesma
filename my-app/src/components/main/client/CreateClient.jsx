import React, {useState,} from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../../../service/methodApi';

const CreateClient = () => {
    const [data, setData] = useState({});
    const [messenger, setMessenger] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const sendData = () => {
        setMessenger('Cargando...');
        console.log("data: ", data);
        post('clients/create', { ...data, id: Date.now()})
            .then(() => window.confirm('Desea crear otro cliente?') ? navigate('/clients/create') : navigate('/clients'))
            .catch(() => setMessenger('Error al cargar. Buscar al Programador 👀👀👀'));

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
                        <input type="text" name="name" id="name" placeholder="Nombre" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="lastname">Apellidos:</label>
                        <input type="text" name="lastname" id="lastname" placeholder="Apellidos" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="address">Direccion:</label>
                        <input type="text" name="address" id="address" placeholder="Direccion" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="phone">Telefono:</label>
                        <input type="number" name="phone" id="phone" placeholder="Telefono" onChange={handleChange} />
                    </div>
                    <div>
                        <small className='messenger'>{messenger}</small>
                    </div>
                    <div className="form-buttons">
                        <button type="reset">Borrar</button>
                        <button onClick={sendData}>Crear</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CreateClient;
