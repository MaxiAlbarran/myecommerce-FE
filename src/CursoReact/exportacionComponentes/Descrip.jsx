import React, {Component} from 'react'
import './product.css'

class Descrip extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="descrip">
                <h3>Descripcion: </h3>
                <p>Escudo cosido del Boca Juniors.
                   <br/>Lema "La Mitad +1" bajo la nuca.
                   <br/>Cuello de pico de canalé.
                   <br/>Punto doble 51% poliéster / 49% poliéster reciclado.
                   <br/>Camiseta para fans de Boca Juniors.
                   <br/>Tejido transpirable AEROREADY.
                   <br/>mystery ink/bold gold.
                </p>
            </div>
        )
    }
}
export default Descrip;
