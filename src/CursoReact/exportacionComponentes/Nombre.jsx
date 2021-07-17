import React, {Component} from 'react'
import './product.css'

class Nombre extends Component{
    constructor(props){
        super(props)
    

}
render(){
    return(
      <div className="name">
        <h3>Producto: </h3>
        <p >{this.props.name}</p>
      </div>  
    )
}
}
export default Nombre;