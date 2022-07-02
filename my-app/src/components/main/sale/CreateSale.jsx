import React, {useState} from 'react';
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom';

const CreateProduct = () => {
    const [senddata, setData] = useState([]);
    const nameInput = useRef();
    const priceInput = useRef();
    const descriptionInput = useRef();
    const messenger = useRef();
    const navigate = useNavigate();

    const sendData= () =>{
       

    }

    return (
        <main>
        <div className="container-top">
            <h2>Crear venta</h2>
        </div>
        <div className="container-bottom">
            <div className="form">
                     <div>
                        <label for="name">Nombre del cliente:</label>
                        <input type="text" name="name" id="name" placeholder="Nombre"></input>
                    </div>
                    <div>
                        <label for="description">Seleccionar producto:</label>
                        <select name="producto" id="producto" size="1">

                            <option value="1">pantalon</option>

                            <option value="2">blusa</option>

                            <option value="3">panty</option>

                        </select>
                    </div>
                    <div>
                        <label for="description">Cantidad:</label>
                        <input id="cant" type="number" value="1"></input>
                    </div>
                    <div>
                        <label for="description">Detalle:</label>
                        <textarea name="description" id="description" rows="5"></textarea>
                    </div>
                    <div>
                        <label for="description">precio del producto:</label>
                        <input type="number" name="price" id="price" placeholder="Precio"></input>
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
