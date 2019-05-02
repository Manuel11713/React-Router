import React from 'react';

const SingleProducto = props =>{
    
    const {descripcion,imagen,nombre,precio} = props.producto;

    return(
        <div className="container">
            <div className="row text-white">
                <div className="col-12 col-lg-4">
                    <img className="mx-auto d-block" src={`/img/${imagen}.png`} alt={nombre}/>
                </div>
                <div className="col-12 col-lg-8">
                    <h1 className="text-center">{nombre}</h1>
                    <span className="badge badge-pill badge-warning p-3">Precio: ${precio}</span>
                    <p>{descripcion}</p>
                    
                </div>
            </div>
        </div>
    )
}
export default SingleProducto;