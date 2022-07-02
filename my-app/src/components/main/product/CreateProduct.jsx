import React, {useState} from 'react';
import {post} from '../../../service/methodApi';
import {useNavigate} from 'react-router-dom';

const CreateProduct = () => {
    const [data, setData] = useState({});
    const [messenger, setMessenger] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
      };

    const sendData= () =>{
        setMessenger('Cargando...');
        post('products/create',{...data,id:Date.now(),dateofcreation:new Date(Date.now()).toISOString(),stock:true})
        .then(()=>window.confirm('Desea crear otro producto?')? navigate('/products/create'):navigate('/products'))
        .catch(()=>setMessenger('Error al cargar. Buscar al Programador 👀👀👀'));

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
                    <input type="text" name="name" id="name" placeholder="Nombre" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="description">Descripcion:</label>
                    <textarea name="description" id="description" rows="5" onChange={handleChange}></textarea>
                </div>
                <div>
                    <label htmlFor="price">Precio:</label>
                    <input type="number" name="price" id="price" placeholder="Precio" onChange={handleChange}/>
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

export default CreateProduct;
