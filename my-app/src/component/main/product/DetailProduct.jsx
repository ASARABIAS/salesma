import React from 'react';
import { useState, useEffect } from 'react';
import { useParams ,Link} from 'react-router-dom';

const DetailProduct = (props) => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/products/${id}`, {
            'mode': 'cors',
            'headers': {
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            });
    }, []);

    return (
        <main>
            <div className="container-top">
                <h2>{`Detalle Producto #${id}`}</h2>
            </div>
            <div className="container-bottom">
                <div className='form'>
                    <div className="form-img">
                        <img src="/images/prueba.jpg" alt="" srcset="" />
                    </div>
                    <div>
                        <label for="name">Nombre:</label>
                        <input type="text" name="name" id="name" placeholder="Nombre" value={product?.name} disabled />
                    </div>
                    <div>
                        <label for="description">Descripcion:</label>
                        <textarea name="description" id="description" rows="5" disabled>{product?.description}</textarea>
                    </div>
                    <div>
                        <label for="price">Precio:</label>
                        <input type="number" name="price" id="price" placeholder="Precio" value={product?.price} disabled />
                    </div>
                    <div>
                        <label for="dateofcreation">Fecha de Creación:</label>
                        <input type="datetime" name="dateofcreation" id="dateofcreation" placeholder="Fecha de creación" value={product?.dateofcreation} disabled />
                    </div>
                    <div>
                        <label for="stock">stock:</label>
                        <input type="text" name="stock" id="stock" value={product?.stock?'Dispsible':'Vedido'} disabled />
                        
                    </div>
                    <div className="form-buttons">
                        <button >Eliminar</button>
                        <button><Link to={`/products/update/${id}`}>Editar</Link> </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default DetailProduct;
