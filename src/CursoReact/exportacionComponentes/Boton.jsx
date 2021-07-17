import React, {Component} from 'react'
import './product.css'

class Boton extends Component{
  constructor(props){
    super(props)
    this.state = {
      mensaje: ""
    }
  }
handleClick = () => {
  this.setState({
    mensaje:"¡Gracias por su compra!"
  })
}
render(){
  return(
    <div className="boton">
      <button type="button" onClick={this.handleClick} id="button"> Comprar </button>
      <p>{this.state.mensaje}</p>
    </div>
  )
}
}


export default Boton;