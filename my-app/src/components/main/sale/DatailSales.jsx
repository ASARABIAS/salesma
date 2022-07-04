import React, {useEffect,useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { delet, get } from '../../../service/methodApi';

const DatailSales = () => {
    const [data, setData] = useState([]);
    const navegate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        get('sales/'+id)
        .then(data=>setData(data))
    },[]);

    const conformDelete = () => {
        delet(`sales/delete/${id}`,'producto')
        .then(()=>navegate('/sales'));
    }


    return (
        <main>
            <div className="container-top">
                <h2>Detalle de venta</h2>
            </div>
            <div className="container-bottom">
                <div className="form">
                    <input type="text" name="" id="" disabled  value={data.saleState}/>

                    <text><br /><br /></text>
                    <div>
                        <label htmlFor="description">cliente:</label>
                        <input type="text" name="" id="" disabled  value={data.nombreCliente}/>
                    </div>
                    <text><br /></text>
                    <div>
                        <label htmlFor="description">producto:</label>
                        <input type="text" name="" id="" disabled value={data?.saleDetail?.nombre}/>
                    </div>
                    <div>
                        <label htmlFor="description">Cantidad:</label>
                        <input name="quantity" id="quantity" type="number" disabled value={data?.saleDetail?.quantity}/>
                    </div>
                    <div>
                        <label htmlFor="description">Total:</label>
                        <input type="text" name="total" id="total" disabled value={data?.saleDetail?.total}/>
                    </div>
                    <div className="form-buttons">
                        <button onClick={conformDelete}>Eliminar</button>
                        <button><Link to={`/sales/update/${id}`}>Editar</Link> </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default DatailSales;
