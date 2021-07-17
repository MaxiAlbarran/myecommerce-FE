import React, {Component} from 'react'
import './product.css'

class Precio extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="price">
                <h3>Precio final: </h3>
               <p> {this.props.price}  </p> 
            </div>
        )
    }
}
export default Precio;