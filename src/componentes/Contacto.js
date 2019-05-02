import React from 'react';
import './css/contacto.css'
const Contacto =()=>{
    return(<div className="container">
        <div className="row bg-light p-3 mt-3">
            <div className="col">
                <form>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Nombre"/>
                </div>
                <div className="form-group">
                    <label htmlFor="correo">Correo</label>
                    <input type="email" className="form-control" id="correo" placeholder="tu-correo@ejemplo"/>
                </div>
                <div className="form-group">
                    <label  htmlFor="comentario">Comentario</label>
                    <textarea id="comentario" className="form-control" placeholder="Escribenos tu comentario">
                        
                    </textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    </div>)
}
export default Contacto;