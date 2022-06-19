import React, {useState} from 'react';
import { useRef } from 'react';
import method from '../../../js/method';
import {useNavigate} from 'react-router-dom';

const CreateProduct = () => {
    const [senddata, setData] = useState([]);
    const nameInput = useRef();
    const priceInput = useRef();
    const descriptionInput = useRef();
    const messenger = useRef();
    const navigate = useNavigate();

    const sendData= () =>{
        messenger.current.innerHTML = 'Cargando...';

        const data={
            id:Date.now(),
            name:nameInput.current.value,
            price:priceInput.current.value,
            stock:true,
            description:descriptionInput.current.value,
            dateofcreation:new Date(Date.now()).toISOString()
        }

        const rta = method.post('http://localhost:8080/products/create',data,messenger);

        if(rta){
            window.confirm('Desea crear otro producto?')? navigate('/products/create'):navigate('/products');
            messenger.current.innerHTML = 'Producto Creado';
        }

    }

    return (
        <main>
        <div className="container-top">
            <h2>Crear Producto</h2>
        </div>
        <div className="container-bottom">
            <div className="form">
                <div className="form-img">
                    <img src="../../images/2020-09-03.jpg" alt="" srcSet=""/>

                    <div>
                        <label htmlFor="img">Cargar imagen</label>
                        <input type="file" name="img" id="img"/>
                    </div>

                </div>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" name="name" id="name" placeholder="Nombre" ref={nameInput}/>
                </div>
                <div>
                    <label htmlFor="description">Descripcion:</label>
                    <textarea name="description" id="description" rows="5" ref={descriptionInput}></textarea>
                </div>
                <div>
                    <label htmlFor="price">Precio:</label>
                    <input type="number" name="price" id="price" placeholder="Precio" ref={priceInput}/>
                </div>
                <div>
                    <small className='messenger' ref={messenger}></small>
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

export default CreateProduct;
