import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import method from '../../../js/method';

const DetailProduct = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const messenger = useRef();


    useEffect(() => {
        fetch(`http://localhost:8080/products/${id}`, {
            'mode': 'cors',
            'headers': {
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then(res => res.json())
            .then(data => {
                
            });
    }, []);

    const conformDelete = () => {
        messenger.current.innerHTML = 'Cargando...';
        const rta = method.delete(` el producto # ${id}`, `http://localhost:8080/products/delete/${id}`,messenger)
        
        if(rta){
            props.history.push('/products');
        }
    }

    return (
        <main>
            <div className="container-top">
                <h2>{`Detalle Producto # ${id}`}</h2>
            </div>
            <div className="container-bottom">
                <div className='form'>
                    <div className="form-img">
                        <img src="/images/prueba.jpg" alt="" />
                    </div>
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" name="name" id="name" placeholder="Nombre" value={product.name} disabled />
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
                        <small className='messenger' ref={messenger}></small>
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
