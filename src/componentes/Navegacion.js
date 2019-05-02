import React from 'react';
import {NavLink} from 'react-router-dom';
import './css/navegacion.css';


const Navegacion = props =>{
    return(
        <div className="container" id="navegacion">
            <div className="row"  >
                <div className="col">
                    <NavLink className="text-center" to={'/nosotros'} activeClassName="activo">
                        <h3>Nosotros</h3>
                    </NavLink>
                </div>
                <div className="col">
                    <NavLink className="text-center" to={'/productos'} activeClassName="activo">
                        <h3>Productos</h3>
                    </NavLink>
                </div>
                <div className="col">
                    <NavLink className=" text-center" to={'/contacto'} activeClassName="activo">
                        <h3>Contacto</h3>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
export default Navegacion;