import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Productos from './Productos';
import Header from './Header';
import Nosotros from './Nosotros';
import Navegacion from './Navegacion';
import Contacto from './Contacto';
import SingleProducto from './SingleProducto';
import Error from './Error';

import infoProductos from '../datos/datos.json';
class Router extends Component{
    state={
        productos:[],
        busqueda:''
    }
    componentWillMount(){
        this.setState({
            productos:infoProductos
        })
    }
    busquedaProducto=busqueda=>{
        
        if(busqueda.length>3){
            this.setState({busqueda});
        }else{
            this.setState({busqueda:''})
        }
    }
    render(){
        let productos = [...this.state.productos];
        let busqueda = this.state.busqueda;
        let productosFiltrados;
        if(busqueda !== ''){
            productosFiltrados = productos.filter(producto=>{
               return(producto.nombre.toLowerCase()===busqueda.toLowerCase())
            })
        }else{
            productosFiltrados = productos;
        }
        return(
            <BrowserRouter>
                <Header/>
                <Navegacion/>
                <Switch>
                    <Route exact path="/productos"  render={()=>{
                        return <Productos
                         productos={productosFiltrados}
                         busqueda={this.busquedaProducto}
                        />
                    }}/>
                    <Route exact path="/nosotros"  component={Nosotros}/>
                    <Route exact path="/contacto" render={()=>{
                        return(
                            <Contacto/>
                        )
                    }}/>
                    <Route exact path="/producto/:productoId"  render={props=>{
                        let idProducto = props.match.params.productoId;
                        return(
                            <SingleProducto
                                producto={this.state.productos[idProducto]}
                            />
                        );
                    }}/>
                    <Route  component={Error}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;