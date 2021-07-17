import React, {Component} from 'react'

class ApiR extends Component{
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(req=> req.json())
    .then(us=> {
        console.log("us", us)
        this.setState({
            users:us,
        })
    })
}

    render(){
        return(
            <div>
                {this.state.users.map(user=><div>{user.name}</div>)}
            </div>
        )
    }
}
export default ApiR