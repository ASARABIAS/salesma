import React, {useState} from 'react';
import {post} from '../../../service/methodApi';
import { get} from '../../../service/methodApi';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const CreateSale = () => {
    const [data, setData] = useState({});
    const [datap, setDatap] = useState({});
    const [products, setProduct] = useState([]);
    const [price, setPrice] = useState([]);
    const [messenger, setMessenger] = useState('');
    const navigate = useNavigate();
    const route = 'products';


    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
      }

      const handleChangep = (event) => {
        const { name, value } = event.target;
        setDatap({ ...datap, [name]: value });
      }


    const sendData= () =>{
        setMessenger('Cargando...');
        post('sales/create',{...data,id:Date.now(),date:new Date(Date.now()).toISOString(),...datap})
        .then(()=>window.confirm('Desea crear otro producto?')? navigate('/sales/create'):navigate('/sales'))
        .catch(()=>setMessenger('Error al cargar. Buscar al Programador 👀👀👀'));

    }

    useEffect(() => {
        get(route)
            .then(data => {
                setProduct(data);           
            })
            .catch(() => setMessenger('Error al cargar. Buscar al Programador 👀👀👀'))
    }, []);


    return (
        <main>
        <div className="container-top">
            <h2>Crear venta</h2>
        </div>
        <div className="container-bottom">
            <div className="form">
                                        <label><input type="radio" id="state" name="state" value="1"/> Pagada</label> 
                                        <label><input type="radio" id="state" name="state" value="0"/>Deuda</label>
              
                                        <text><br/><br/></text>
                     <div>
                     <label htmlFor="description">Nombre del cliente:</label>
                        <input type="text" name="idClient" id="idClient" placeholder="Nombre" onChange={handleChange}/>
                    </div>
                    <div>
                    <label htmlFor="description">Seleccionar producto:</label>
                        <select name="saleDetail.idProduct" id="saleDetail.idProduct" size="1" onClick={handleChangep}>
                       
                            { products.map((item, index) => (<option key={index} value= {item.name}>{item.name}</option>))}

                        </select>
                    </div>
                    <div>
                    <label htmlFor="description">Cantidad:</label>
                        <input name="saleDetail.quantity" id="saleDetail.quantity" type="number"  onChange={handleChangep}/>
                    </div>
                    <div>
                    <label htmlFor="description">precio del producto:</label>  
                    <input type="text" name="saleDetai" id="saleDetail.price"/>
                    </div>
                    <div>
                    <label htmlFor="description">Total:</label>  
                    <input type="text" name="saleDetail.total" id="saleDetail.total" onChange={handleChangep}/>
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
