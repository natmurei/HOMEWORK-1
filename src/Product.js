import React from 'react';

class Product extends React.Component{
    constructor(props){
        super(props)
        this.state={
            myList:[]
        }
    }
    componentDidMount (){
        fetch('http://localhost:5000/products')
.then(response =>response.json())
.then(response =>{
    this.setState({myList:response})
});       
    }
    render (){
        return(
            this.state.myList.map(Prod =>{
                return <li>{Prod.name}</li>
            })
        )
    }
}

export default Product