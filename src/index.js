import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const product =(
    <div>
        <h1 id="title">Welcome to Greens Kiosk</h1>
   <p>We sell fruits and vegetables</p>
   <h2>Products</h2>
   <ul id="products"></ul>

   <h3>Fruits</h3>
   <ul id="fruList"></ul>

   <h3>Vegetables</h3>
   <ul id="vegList"></ul>
    </div>
)

ReactDOM.render( product, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
