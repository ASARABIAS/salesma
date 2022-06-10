import React from 'react';

const CreateProduct = () => {
    return (
        <main>
        <div className="container-top">
            <h2>Crear Producto</h2>
        </div>
        <div className="container-bottom">
            <form>
                <div className="form-img">
                    <img src="../../images/2020-09-03.jpg" alt="" srcset=""/>

                    <div>
                        <label for="img">Cargar imagen</label>
                        <input type="file" name="img" id="img" Style="display: none;"/>
                    </div>

                </div>
                <div>
                    <label for="name">Nombre:</label>
                    <input type="text" name="name" id="name" placeholder="Nombre"/>
                </div>
                <div>
                    <label for="description">Descripcion:</label>
                    <textarea name="description" id="description" rows="5"></textarea>
                </div>
                <div>
                    <label for="price">Precio:</label>
                    <input type="number" name="price" id="price" placeholder="Precio"/>
                </div>
                <div className="form-buttons">
                    <button type="reset">Borrar</button>
                    <button>Crear</button>
                </div>
            </form>
        </div>
    </main>
    );
}

export default CreateProduct;
