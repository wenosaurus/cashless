import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './components/Search/Search';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';

class App extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            products: [{ name: "Classic Clean Shampoo", brand: "Pantene", category: "Shampoo", price: 5.00, upc: 100001 }, { name: "Pure Baking Soda", brand: "Arm & Hammer", category: "Grocery", price: 1.00, upc: 100002 }],
            displayResult: null,
            cart: []
        };
    }

    changeHandler = (event) => {
        this.setState({ query: event.target.value });
        console.log("THIS CHANGE", this.state.query)
    }

    clickHandler = () => {
        for (var i = 0; i < this.state.products.length; i++) {
            console.log("DISPLAYING IN CLICKHANDLER UPC", this.state.products[i].upc);
            if (this.state.products[i].upc === parseInt(this.state.query)) {
                return this.setState({ displayResult: this.state.products[i] });
            }
        }
        this.setState({ displayResult: "N/A" });
    }

    addToCart = () => {
        let cart = this.state.cart;
        let displayResult = this.state.displayResult;
        let itemIndex = cart.findIndex( item => item.upc === displayResult.upc);
        if (itemIndex === -1) {
            this.state.displayResult.count = 1;
            this.setState({cart : [this.state.displayResult, ...cart]});
        } else {
            cart[itemIndex].count += 1;
            this.setState({ cart: cart });
        }
        // cart.unshift(this.state.displayResult);
    };

    removeFromCart = (index) => {
        this.setState(({ cart }) => {
            if (cart[index].count === 1) {
                cart.splice(index, 1);
                console.log("REMOVE FROM CART IF");
            } else {
                cart[index].count--;
                console.log("REMOVE FROM CART ELSE");
            }
            return { cart };
        });
    };

    render() {
        console.log("DISPLAYING RESULT IN RENDER APP", this.state.displayResult);
        return (
            <div>
            <Search selectClick={this.displayProduct} onClick={this.clickHandler} products={this.state.products} onChange={this.changeHandler} />

            <Product displayResult={this.state.displayResult} addToCart={this.addToCart} />

            <Cart displayCart={this.state.cart} removeFromCart={this.removeFromCart} />
            </div>
        );
    }
}

export default App;