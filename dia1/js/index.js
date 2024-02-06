import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client';

let mainDiv = document.getElementById('root');

let root = ReactDOM.createRoot(mainDiv);


let button = document.getElementById('boton');
button.addEventListener('click', () => {
    // let elemento = document.getElementById('primerTitulo');
    // let cadena = 'Texto agregado!'
    // elemento.innerHTML = `
        // <p>Esta es la cadena ingresada:</p>
        // <p>${cadena}</p>
    // `;

    let h1 = React.createElement('h1', null, 'Hola mundo!');
    let h2 = React.createElement('h1', null, 'Curso de React');

    let contenedor = React.createElement(React.Fragment, null, [h1, h2]);

    root.render(contenedor);

});
