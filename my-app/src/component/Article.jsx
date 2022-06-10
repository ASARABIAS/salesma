import React from 'react';
import { Link } from 'react-router-dom';

const Article = (props) => {
    console.log("props.route: ", props.route);
    return (
        <article>
            <div className="articule-left">
                <div className="articule-left-right">
                    <h3>{props.name}</h3>
                    <strong>{props.price}</strong>
                    <p>fecha registrado</p>
                </div>
            </div>
            <div className="articule-right">
                <Link to={'#'}><i className="fas fa-marker"></i></Link>
                <Link to={'#'}><i className="fas fa-check"></i></Link>
                <Link to={`${props.route}/${props.id}`} className='elemnt-center'><i className="fas fa-arrow-right"></i></Link>
            </div>
        </article>
        
    );
}

export default Article;
