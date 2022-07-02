import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { put, get } from '../../../service/methodApi';

const UpdateProduct = (props) => {
    const [datos, setDatos] = useState({});
    const [messenger, setMessenger] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        get(`products/${id}`)
            .then(data => setDatos(data))
            .catch(() => setMessenger('Error al cargar. Buscar al Programador 👀👀👀'));
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatos({ ...datos, [name]: value });
    };

    const conformUpdate = async () => {
        setMessenger('Cargando...');
        put(`products/edit/${id}`,datos)
        .then(()=>navigate('/products'))
        .catch(()=>setMessenger('Error al cargar. Buscar al Programador 👀👀👀'))
        
    }
    return (
        <main>
            <div className="container-top">
                <h2>{`Editando Producto ${datos.name}`}</h2>
            </div>
            <div className="container-bottom">
                <div className='form' >
                    <div className="form-img">
                        <img src="/images/prueba.jpg" alt="" />
                    </div>
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" name="name" id="name" placeholder="Nombre" value={datos.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="description">Descripcion:</label>
                        <textarea name="description" id="description" rows="5" value={datos.description} onChange={handleChange}></textarea>
                    </div>
                    <div>
                        <label htmlFor="price">Precio:</label>
                        <input type="number" name="price" id="price" placeholder="Precio" value={datos.price} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="dateofcreation">Fecha de Creación:</label>
                        <input type="Datetime" name="dateofcreation" id="dateofcreation" placeholder="Fecha de creación" value={datos.dateofcreation} onChange={handleChange} />
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

export default UpdateProduct;
