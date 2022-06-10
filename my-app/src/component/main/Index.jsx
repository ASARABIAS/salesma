
import Section from '../Section.jsx';
import React, { Component } from 'react';

class Main extends Component {

    componentDidMount(){
        /*
        const endpoint ='https://api.giphy.com/v1/gifs/trending?api_key=dIUNaPUd2E4EpZ9Vm4mtb7xvSmIO8Hlw';
        fetch('http://localhost:8080/products',{
            method:'get',
            
        })
        .then(resp =>resp.json())
        .then(resp =>{
            console.log("respuesta: ",resp);
        })
        .catch(error => console.log(error));
        */
    }

    render() {
        return (
            <main>
                <Section
                    title="Top 5 de los productos mas Antiguos"
                />
                <Section
                    title="Top 5 de las Ventas mas Antiguas"
                />
            </main>
        );
    }
}



/*
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

*/
export default Main;
