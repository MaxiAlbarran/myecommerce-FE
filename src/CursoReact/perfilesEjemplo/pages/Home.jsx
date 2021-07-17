import React, {Component} from 'react'
import Perfil from '../components/Perfil'

class Home extends Component{
    perfiles;
    constructor(props){
        super(props)
    }
componentWillMount(){
    this.perfiles = [
        {
            id : 1,
            nombre: "Maxi albarran",
            mail: "maxialbarran@hotmail.com",
            edad: 18
        },
        {
            id : 2,
            nombre: "Sebastian bazzi",
            mail: "sebazzi@hotmail.com",
            edad: 19
        },
        {
            id : 3,
            nombre: "Mel albarran",
            mail: "melalbarran@hotmail.com",
            edad: 28
        }
        
    ]

    
}
    render(){
        return(
            <div id="principal">
             Home
            {this.perfiles.map(
                 perfil=><Perfil datos={perfil}  />)}            
                
            </div>
        )
    }
}
export default Home;
