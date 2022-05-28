import React from 'react';
import SectionTitle from './SectionTitle';
import SectionBody from './SectionBody';

const Section = (props) => {
    return (
        <section className="container" id="container-product">
             <SectionTitle name={props.title}/>
             <SectionBody/>
        </section>
    );
}

export default Section;
