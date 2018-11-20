import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './components/Search/Search';
import Product from './components/Product/Product';

class App extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            products: [{name: "Classic Clean Shampoo", brand: "Pantene", category: "Shampoo", price: 5.00, upc: 100001}, {name: "Pure Baking Soda", brand: "Arm & Hammer", category: "Grocery", price: 1.00, upc: 100002}],
            displayResult: null,
            cart: []
        };
    }

    changeHandler = (event) => {
        this.setState({query : event.target.value});
        console.log("THIS CHANGE", this.state.query)
    }

    clickHandler = () => {
        for (var i = 0; i < this.state.products.length; i++) {
            console.log("DISPLAYING IN CLICKHANDLER UPC", this.state.products[i].upc);
            if (this.state.products[i].upc === parseInt(this.state.query)) {
                return this.setState({displayResult : this.state.products[i]});
            }
        }
        this.setState({displayResult : "N/A"});
    }

    render() {
        console.log("DISPLAYING RESULT IN RENDER APP", this.state.displayResult);
        return (
            <div>
            <Search selectClick={this.displayProduct} onClick={this.clickHandler} products={this.state.products} onChange={this.changeHandler} />
            <Product displayResult={this.state.displayResult} />
            </div>
        );
    }
}

export default App;