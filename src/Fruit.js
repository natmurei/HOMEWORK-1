import React from 'react';

class Fruit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            myList:[]
        }
    }
    componentDidMount (){
        fetch('http://localhost:5000/products/fruits')
.then(response =>response.json())
.then(response =>{
    this.setState({myList:response})
});       
    }
    render (){
        return(
            this.state.myList.map(fru =>{
                return <li>{fru.name}</li>
            })
        )
    }
}

export default Fruit