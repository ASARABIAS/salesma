import React from 'react';

const DetailProduct = () => {
    return (
        <main>
        <div className="container-top">
            <h2>Nombre del Producto</h2>
        </div>
        <div className="container-bottom">
            <div className="form-img">
                <img src="../../images/2020-09-03.jpg" alt="" srcset="" />
            </div>
            <div>
                <label htmlFor="name">Nombre:</label>
            </div>
            <div>
                <label htmlFor="description">Descripcion:</label>
            </div>
            <div>
                <label htmlFor="price">Precio:</label>
            </div>
        </div>
    </main>
    );
}

export default DetailProduct;
