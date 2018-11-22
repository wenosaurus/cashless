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
            query: window.location.pathname.substring(1),
            products: [{ name: "Classic Clean Shampoo", brand: "Pantene", category: "Shampoo", price: 5.99, upc: 100001 }, { name: "Pure Baking Soda", brand: "Arm & Hammer", category: "Grocery", price: 1.20, upc: 100002 }],
            displayResult: null,
            cart: []
        };
    }

    changeHandler = (event) => {
        this.setState({ query: event.target.value });
    }

    clickHandler = () => {
        for (var i = 0; i < this.state.products.length; i++) {
            if (this.state.products[i].upc === parseInt(this.state.query)) {
                return this.setState({ displayResult: this.state.products[i] });
            }
        }
        this.setState({ displayResult: "N/A" });
    }

    addToCart = () => {
        let {subtotal, total, cart} = this.state;
        let displayResult = this.state.displayResult;
        let index = cart.findIndex(item => item.upc === displayResult.upc);
        if (index === -1) {
            this.state.displayResult.count = 1;
            this.setState({ cart: [this.state.displayResult, ...cart] });
        } else {
            cart[index].count += 1;
            this.setState({ cart: cart });
        }
    };

    removeFromCart = (index) => {
        this.setState(({ cart }) => {
            if (cart[index].count === 1) {
                cart.splice(index, 1);
            } else {
                cart[index].count--;
            }
            return { cart };
        });
    };

    render() {
        console.log("PATHNAME", this.state.pathName);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12" align="center">
                         <img src="./images/logo.png" / >
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <Search
                            query={this.state.query}
                            selectClick={this.displayProduct}
                            onClick={this.clickHandler}
                            products={this.state.products}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="col-sm-4">
                        <Product
                            displayResult={this.state.displayResult}
                            addToCart={this.addToCart}
                        />
                    </div>
                    <div className="col-sm-4">
                        <Cart
                            displayCart={this.state.cart}
                            removeFromCart={this.removeFromCart}
                            gst={this.state.gst}
                            total={this.state.total}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;