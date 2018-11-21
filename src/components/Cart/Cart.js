import React from 'react';

class Cart extends React.Component {
    render() {
        console.log("PROPS from Carts", this.props.displayCart);

        let cartItems = this.props.displayCart.map((item, index) => {
            return (
                <li>{item.name} <button onClick={() => {this.props.removeFromCart(index)}}>Remove</button></li>
            )
        })

        return (
            <div>
            {cartItems}
            </div>
        )
    }
};

export default Cart;