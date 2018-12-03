import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './data/Data.js';

import Search from './components/Search/Search';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';

class App extends Component {
    constructor() {
        super();
        this.state = {
            query: window.location.pathname.substring(1),
            products: data,
            displayResult: null,
            cart: []
        };
    }

    changeHandler = (event) => {
        this.setState({ query: event.target.value });
    }

    componentDidMount() {
        const loadCart = JSON.parse(localStorage.getItem("shoppingCart"));
        if (loadCart === null) {
            this.setState({ cart: [] });
        } else {
            this.setState({ cart: loadCart });
        }
    }

    clickHandler = () => {
        for (var i = 0; i < this.state.products.length; i++) {
            if (this.state.products[i].upc === parseInt(this.state.query)) {
                return this.setState({ displayResult: this.state.products[i] });
            }
        }
        this.setState({ displayResult: "N/A" });
    }

    qrScan = () => {
        for (var i = 0; i < this.state.products.length; i++) {
            if (this.state.products[i].upc === parseInt(this.state.query)) {
                return this.setState({ displayResult: this.state.products[i] });
            }
        }
        this.setState({ displayResult: "N/A" });
    }

    addToCart = () => {
        let cart = this.state.cart;
        let displayResult = this.state.displayResult;
        let index = cart.findIndex(item => item.upc === displayResult.upc);
        if (index === -1) {
            this.state.displayResult.count = 1;
            this.setState({ cart: [this.state.displayResult, ...cart] });
            localStorage.setItem("shoppingCart", JSON.stringify([this.state.displayResult, ...cart]));
        } else {
            cart[index].count += 1;
            this.setState({ cart: cart });
            localStorage.setItem("shoppingCart", JSON.stringify([...cart]));
        }
    }

    removeFromCart = (index) => {
        this.setState(({ cart }) => {
            if (cart[index].count === 1) {
                cart.splice(index, 1);
                localStorage.setItem("shoppingCart", JSON.stringify([...cart]));
            } else {
                cart[index].count--;
                localStorage.setItem("shoppingCart", JSON.stringify([...cart]));
            }
            return { cart };
        });
    }

    addFromCart = (index) => {
        this.setState(({ cart }) => {
            if (cart[index].count >= 1) {
                cart[index].count++;
                localStorage.setItem("shoppingCart", JSON.stringify([...cart]));
            }
            return { cart };
        });
    }

    onSuccess = (payment) => {
        console.log("PAYMENT PAID", payment.paid);
        if (payment.paid === true) {
            window.alert('Thank you for your purchase!');
            localStorage.clear();
            window.location.reload();
        } else {
            window.alert('Payment did not go thru, please try again.');
        }
    }

    render() {
        if (this.state.displayResult === null) {
            this.qrScan();
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12" align="center">
                         <img src="./images/logo.png" className="logo" alt="logo" / >
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" align="center">
                        <Search
                            query={this.state.query}
                            selectClick={this.displayProduct}
                            onClick={this.clickHandler}
                            products={this.state.products}
                            onChange={this.changeHandler}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Product
                            displayResult={this.state.displayResult}
                            addToCart={this.addToCart}
                        />
                    </div>
                    <div className="col-md-8">
                        <Cart
                            displayCart={this.state.cart}
                            removeFromCart={this.removeFromCart}
                            addFromCart={this.addFromCart}
                            gst={this.state.gst}
                            total={this.state.total}
                            onSuccess={this.onSuccess}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" align="center">
                        <footer>
                            2018 Built with <i class="fas fa-heart"></i> <a href="http://www.wenvo.tech">wenvo.tech</a>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;