import React from 'react';
import SectionTitle from './SectionTitle';
import SectionBody from './SectionBody';

const Section = (props) => {
    return (
        <section className="container" id="container-product">
            <SectionTitle name={props.title} route={props.route}/>
            <SectionBody route={props.route}/>
        </section>
    );
}

export default Section;
