import React from 'react';
import '../styleSheets/Testimonio.css';

function Testimonio(props) {
    return (

        <div className='contendor-testimonio'>
            <img className='imagen-testimonio'
                src={require(`../imagenes/Testimonio-${props.imagen}.jpeg`)}
                alt='foto de perro'
            />
            <div className='contenedor-text-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{props.nombre} </strong>,{props.feeling}</p>
                <p className='cargo-testimonio'>{props.clase} de <strong>{props.who}</strong></p>
                <p className='texto-testimonio'> "{props.testimonio}"</p>
            </div>

        </div>

    );
}
export default Testimonio;
