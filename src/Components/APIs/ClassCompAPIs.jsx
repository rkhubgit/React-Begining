import { Component } from "react";


class ClassCompAPI extends Component{
    // constructor to be used for initializing the state into the class components
    constructor(props){
        super(props)

        this.state ={
            data: []
        }
        
    } 


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((result) => {
            this.setState({data: result})
            
        })
    }

    render(){
        return(

            <>
                <h2>Make an api call using the class component </h2>

                {
                    this.state.data.map((data, id) => {
                        return(
                            <>
                                <div key={id} >{data.title}</div>
                            </>
                        )
                    })
                }
            </>
        )
    }
}

export default ClassCompAPI;