import React, { useState, useRef } from 'react';
import { post } from '../../../service/methodApi';
import { get } from '../../../service/methodApi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateSale = () => {
    const [data, setData] = useState({});
    const [products, setProduct] = useState([]);
    const [clients, setClients] = useState([]);
    const [messenger, setMessenger] = useState('');
    const navigate = useNavigate();
    const route = 'sales';


    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
        if (name == 'quantity') {
            const productSelect = products.find(item => item.id == data.idProduct);
            const valor = productSelect.price * parseInt(value);
            setData({ ...data, total: valor });
        }
    }

    const sendData = () => {
        setMessenger('Cargando...');
        const clientSelect = clients.find(item => item.id == data.idClient);
        const productSelect = products.find(item => item.id == data.idProduct);
        const datos = {
            id: Date.now(),
            idClient: data.idClient,
            nombreCliente: clientSelect.name + ' ' + clientSelect.lastname,
            date: new Date(Date.now()).toISOString(),
            saleDetail: {
                idProduct: data.idProduct,
                quantity: parseInt(data.quantity),
                nombre: productSelect.name,
                total: data.total,
            },
            saleState: data.saleState,
        }
        post(`${route}/create`, datos)
            .then(() => window.confirm('Desea registrar otra venta') ? navigate('/sales/create') : navigate('/sales'))
            .catch(() => setMessenger('Error al cargar. Buscar al Programador 👀👀👀'));
    }

    useEffect(() => {
        get('products')
            .then(data => {
                setProduct(data);
            })
            .catch(() => setMessenger('Error al cargar. Buscar al Programador 👀👀👀'));
        get('clients')
            .then(data => setClients(data))
            .catch(() => setMessenger('Error al cargar. Buscar al Programador 👀👀👀'))
    }, []);


    return (
        <main>
            <div className="container-top">
                <h2>Crear venta</h2>
            </div>
            <div className="container-bottom">
                <div className="form">
                    <label><input type="radio" id="state" name="saleState" onChange={handleChange} value="1" /> Pagada</label>
                    <label><input type="radio" id="state" name="saleState" onChange={handleChange} value="0" />Deuda</label>

                    <text><br /><br /></text>
                    <div>
                        <label htmlFor="description">Seleccionar cliente:</label>
                        <select name="idClient" id="idClient" size="1" onChange={handleChange}>
                            <option value='none' selected>Escoja Opcion</option>
                            {clients.map((item, index) => (<option key={index} value={item.id}>{item.name}</option>))}

                        </select>

                    </div>
                    <text><br /></text>
                    <div>
                        <label htmlFor="description">Seleccionar producto:</label>
                        <select name="idProduct" id="idProduct" size="1" onChange={handleChange}>
                            <option value='none' selected>Escoja Opcion</option>
                            {products.map((item, index) => (<option key={index} value={item.id}>{item.name}</option>))}

                        </select>
                    </div>
                    <div>
                        <label htmlFor="description">Cantidad:</label>
                        <input name="quantity" id="quantity" type="text" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="description">Total:</label>
                        <input type="text" name="total" id="total" onChange={handleChange} value={data?.total ? data?.total : 0} />
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

export default CreateSale;
