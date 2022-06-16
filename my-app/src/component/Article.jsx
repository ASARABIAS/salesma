import React from 'react';
import { Link } from 'react-router-dom';

const Article = (props) => {
    return (
        <article>
            <div className="articule-left">
                <div className="articule-left-right">
                    <h3>{props.name}</h3>
                    <strong>{props.price}</strong>
                    <p>{props.dateofcreation?props.dateofcreation.split("T")[0]:'none'}</p>
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
