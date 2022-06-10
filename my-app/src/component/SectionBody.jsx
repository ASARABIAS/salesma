import React from 'react';
import Article from './Article';

const SectionBody = (props) => {
    return (
        <div className="container-bottom">
            <Article route={props.route}/>
            <Article/>
        </div>
    );
}

export default SectionBody;
