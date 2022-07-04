import React from 'react';
import { Link } from 'react-router-dom';

const Article = (props) => {
    return (
        <article>
            <div className="articule-left">
                <div className="articule-left-right">
                    <h3>{`${props.name} ${props.lastname}`}</h3>
                    <strong>{props.phone}</strong>
                    <p>{props.address}</p>
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