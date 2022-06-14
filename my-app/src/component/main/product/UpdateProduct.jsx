import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    return (
        <div>
            actualizar producto del id: {useParams().id}
        </div>
    );
}

export default UpdateProduct;
