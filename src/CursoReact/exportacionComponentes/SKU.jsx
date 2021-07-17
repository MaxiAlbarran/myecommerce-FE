import React, {Component} from 'react';
import './product.css'

class Sku extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="sku">
                <h3> SKU (Stock keeping unity): </h3>
                <p> {this.props.sku}</p>
            </div>
        )
    }
}

export default Sku;

