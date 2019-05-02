import React,{Component} from 'react';
import Producto from './Producto';
import Buscador from './Buscador';
import './css/productos.css'

class Productos extends Component{
    render(){
        return(
            <React.Fragment>
                <Buscador
                    busqueda={this.props.busqueda}
                />
                <div className="productos container">
                    <ul className="lista-productos">
                        {Object.keys(this.props.productos).map(key=>{
                            return(<Producto key={key} producto ={this.props.productos[key]}/>)
                        })}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
export default Productos;