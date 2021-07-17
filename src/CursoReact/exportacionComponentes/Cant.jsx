import React, {Component} from 'react'
import './product.css'

class Cantidad extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="cant">
                <h3> Cantidad disponible </h3>
                <div>
                    <p id="small"> Talle S: {this.props.s}</p>
                </div>
                <div>
                    <p id="medium"> Talle M: {this.props.m}</p>
                </div>
                <div>
                    <p id="large"> Talle L: {this.props.l}</p>
                </div>
                <div>
                    <p id="xlarge"> Talle XL: {this.props.xl}</p>
                </div>
            </div>
        )
    }
}
export default Cantidad;