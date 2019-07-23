import React from 'react';

class Vegetable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            myList:[]
        }
    }
    componentDidMount (){
        fetch('http://localhost:5000/products/vegetables')
.then(response =>response.json())
.then(response =>{
    this.setState({myList:response})
});       
    }
    render (){
        return(
            this.state.myList.map(vege =>{
                return <li>{vege.name}</li>
            })
        )
    }
}

export default Vegetable