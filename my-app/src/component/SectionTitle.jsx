import React from 'react';
import { Link} from 'react-router-dom';

const Title = (props) => {
    
    return (
        <div className="container-top">
            <h2>{props.name}</h2>
            {props.route ?<Link to={`${props.route}/create`}><i class="fas fa-plus"></i></Link> :''}
        </div>
    );
}

export default Title;
