import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Fruit from './Fruit';
import Vegetable from './Vegetable';
import Collapsible from 'react-collapsible'

class App extends React.Component{
  render(){
    return(
      <div>
  <h1 id="title">Welcome to Greens Kiosk</h1>
   <p>We sell fruits and vegetables</p>
   <h2>Products</h2>
   <ul id="products">
     <Collapsible trigger = 'collapsible product'>
      <Product/>
      </Collapsible>
     
   </ul>


   <h3>Fruits</h3>
   <ul id="fruList"></ul>
   <Collapsible trigger = 'collapsible fruit'>
     <Fruit/>
     </Collapsible>
     

   <h3>Vegetables</h3>
   <ul id="vegList"></ul>
   <Collapsible trigger = 'collapsible vegetable'>
     <Vegetable/>
     </Collapsible>
      </div>
    )
  }
}

export default App;
