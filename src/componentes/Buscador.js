import React,{Component} from 'react';

class Buscador extends Component{
    leerDatos=e=>{
        const termino = e.currentTarget.value;
        //Enviamos por props

        this.props.busqueda(termino);
;    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col ">
                        <form className="mt-3">
                            <div className="form-group ">
                                <input className="form-control w-75 mx-auto " type="text" placeholder="Busqueda..." onChange={this.leerDatos}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}  

export default Buscador;