import React from 'react';

const Article = (props) => {
    return (
        <article>
            <div className="articule-left">
                <div className="articule-left-right">
                    <h3>Nombre del cliente</h3>
                    <strong>total de la venta</strong>
                    <p>fecha registrado</p>
                </div>
            </div>
            <div className="articule-right">
                <i className="fas fa-marker"></i>
                <i className="fas fa-check"></i>
                <i className="fas fa-arrow-right elemnt-center"></i>
            </div>
        </article>
    );
}

export default Article;
