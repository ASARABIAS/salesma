import React, { useState, useRef } from 'react';
import { post } from '../../../service/methodApi';
import { get } from '../../../service/methodApi';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateSales = () => {
    const [data, setData] = useState({});
    const [products, setProduct] = useState([]);
    const [clients, setClients] = useState([]);
    const [messenger, setMessenger] = useState('');
    const navigate = useNavigate();
    const route = 'sales';
    const { id } = useParams();


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
                quantity: data.quantity,
                nombre: productSelect.name,
                total: data.total,
            },
            saleState: data.saleState == 'Debe'?0:1,
        }
        post(`${route}/create`, datos)
            .then(() => window.confirm('Desea registrar otra venta') ? navigate('/sales/create') : navigate('/sales'))
            .catch(() => setMessenger('Error al cargar. Buscar al Programador 👀👀👀'));
    }

    useEffect(() => {
        get('sales/' + id)
            .then(data => setData(data))
            .catch(() => setMessenger('Error al cargar. Buscar al Programador 👀👀👀'));

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
                <h2>Modificar venta</h2>
            </div>
            <div className="container-bottom">
                <div className="form">
                    <label><input type="radio" id="state" name="saleState" onChange={handleChange} value="Pago" checked={data.saleState=='Pago' } /> Pagada</label>
                    <label><input type="radio" id="state" name="saleState" onChange={handleChange} value="Debe" checked={data.saleState=='Debe'}/>Deuda</label>

                    <text><br /><br /></text>
                    <div>
                        <label htmlFor="description">Seleccionar cliente:</label>
                        <select name="idClient" id="idClient" size="1" onChange={handleChange}>
                            <option value={data.idClient} selected>{data.nombreCliente} </option>
                            {clients.map((item, index) => (<option key={index} value={item.id}>{item.name}</option>))}

                        </select>

                    </div>
                    <text><br /></text>
                    <div>
                        <label htmlFor="description">Seleccionar producto:</label>
                        <select name="idProduct" id="idProduct" size="1" onChange={handleChange}>
                            <option value={data.idProduct} selected>{data.saleDetail?.nombre}</option>
                            {products.map((item, index) => (<option key={index} value={item.id}>{item.name}</option>))}

                        </select>
                    </div>
                    <div>
                        <label htmlFor="description">Cantidad:</label>
                        <input name="quantity" id="quantity" type="number" onChange={handleChange} value= {data.saleDetail?.quantity}/>
                    </div>
                    <div>
                        <label htmlFor="description">Total:</label>
                        <input type="text" name="total" id="total" onChange={handleChange} value= {data.saleDetail?.total} />
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

export default UpdateSales;
