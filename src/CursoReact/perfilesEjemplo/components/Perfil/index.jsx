import React, {Component} from 'react'


class Perfil extends Component{
    constructor(props){
        super(props)
    
    }
    render(){
        return(
            <div id="principal">
            {this.props.datos.nombre}
            {this.props.datos.edad}
            {this.props.datos.mail}
            </div>
        )
    }
}
export default Perfil;