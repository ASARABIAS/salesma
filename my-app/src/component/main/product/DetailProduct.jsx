import React from 'react';

const DetailProduct = () => {
    return (
        <main>
        <div class="container-top">
            <h2>Nombre del Producto</h2>
        </div>
        <div class="container-bottom">
            <div class="form-img">
                <img src="../../images/2020-09-03.jpg" alt="" srcset="" />
            </div>
            <div>
                <label for="name">Nombre:</label>
            </div>
            <div>
                <label for="description">Descripcion:</label>
            </div>
            <div>
                <label for="price">Precio:</label>
            </div>
        </div>
    </main>
    );
}

export default DetailProduct;
