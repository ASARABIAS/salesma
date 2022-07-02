import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {get,delet} from '../../../service/methodApi';
const DetailProduct = (props) => {
    const [product, setProduct] = useState({});
    const [messenger, setMessenger] = useState('');
    const navegate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        get(`products/${id}`)
        .then(data => setProduct(data))
        .catch(()=>setMessenger('Error al cargar. Buscar al Programador 👀👀👀'));
    }, []);

    const conformDelete = () => {
        setMessenger('Cargando...');
        delet(`products/delete/${id}`,'producto')
        .then(()=>navegate('/products'));
    }

    return (
        <main>
            <div className="container-top">
                <h2>{`Detalle Producto ${product?.name}`}</h2>
            </div>
            <div className="container-bottom">
                <div className='form'>
                    <div className="form-img">
                        <img src="/images/prueba.jpg" alt="" />
                    </div>
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" name="name" id="name" placeholder="Nombre" value={product?.name} disabled />
                    </div>
                    <div>
                        <label htmlFor="description">Descripcion:</label>
                        <textarea name="description" id="description" rows="5" value={product?.description} disabled></textarea>
                    </div>
                    <div>
                        <label htmlFor="price">Precio:</label>
                        <input type="number" name="price" id="price" placeholder="Precio" value={product?.price} disabled />
                    </div>
                    <div>
                        <label htmlFor="dateofcreation">Fecha de Creación:</label>
                        <input type="datetime" name="dateofcreation" id="dateofcreation" placeholder="Fecha de creación" value={product?.dateofcreation} disabled />
                    </div>
                    <div>
                        <label htmlFor="stock">stock:</label>
                        <input type="text" name="stock" id="stock" value={product?.stock ? 'Disponible' : 'Vedido'} disabled />

                    </div>
                    <div>
                        <small className='messenger' >{messenger}</small>
                    </div>
                    <div className="form-buttons">
                        <button onClick={conformDelete}>Eliminar</button>
                        <button><Link to={`/products/update/${id}`}>Editar</Link> </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default DetailProduct;
