import React from 'react';
import Section from '../Section.jsx';

const Main = () => {
    return (
        <main>
           <Section 
                title= "Top 5 de los productos mas Antiguos"
                body="Precio"
           />
           <Section 
                title= "Top 5 de las Ventas mas Antiguas"
                body="Precio"
           />
        </main>
    );
}

export default Main;
