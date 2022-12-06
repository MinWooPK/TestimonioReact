import React from 'react';
import '../styleSheets/Testimonio.css';

function Testimonio() {
    return (

        <div className='contendor-testimonio'>
            <img className='imagen-testimonio'
                src={require('../imagenes/Testimonio-perro.jpeg')}
                alt='foto de perro'
            />
            <div className='contenedor-text-testimonio'>
                <p className='nombre-testimonio'>Perro Rick y Morty</p>
                <p className='cargo-testimonio'>Perro de Morty</p>
                <p className='texto-testimonio'> guau guauuu guauu</p>
            </div>

        </div>

    );
}
export default Testimonio;
