import React from 'react';
import { Link } from 'react-router-dom';

const Article = (props) => {
    return (
        <article>
            <div className="articule-left">
                <div className="articule-left-right">
                    <h3>{props?.idClient}</h3>
                    <p>{props?.saleDetail?.idProduct}</p>
                    <strong>{props?.saleDetail?.total}</strong>
                    <p>{props?.date?props.date.split("T")[0]:'none'}</p>
                </div>
            </div>
            <div className="articule-right">
                <Link to={`${props.route}/update/${props.id}`}><i className="fas fa-marker"></i></Link>
                <Link to={'#'} onClick={props.delete}><i className="fas fa-trash-alt"></i></Link>
                <Link to={`${props.route}/${props.id}`} className='elemnt-center'><i className="fas fa-arrow-right"></i></Link>
            </div>
        </article>
        
    );
}

export default Article;