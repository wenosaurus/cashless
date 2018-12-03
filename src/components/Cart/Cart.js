import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Cart extends React.Component {

    render() {
        // const array = this.props.displayCart;
        const loadCart = JSON.parse(localStorage.getItem("shoppingCart"));
        console.log("LOAD CART", loadCart);
        let displayShoppingCart;
        let displayTotal;
        let displayCheckout;
        const client = {
            sandbox:    'AThFaFVRTNO8XtBZUZgABXtI6cvwPE3Iff7iQoWv8Jzxb-CtWzY37pX8cIO2Dd9H8os2r5mRJGGlSj8f',
            production: 'YOUR-PRODUCTION-APP-ID',
        }

        if (loadCart === null || loadCart.length < 1) {
            displayShoppingCart = (
                <tr><td colSpan="4">
                Your shopping cart is empty.
                </td></tr>
            )
        } else {
            let subtotal = 0;
            let gst = 0.07;
            for (var i = 0; i < loadCart.length; i++) {
                subtotal += loadCart[i].price * loadCart[i].count
            };
            displayShoppingCart = loadCart.map((item, index) => {
                return (
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.count}</td>
                    <td>${(item.price * item.count).toFixed(2)}</td>
                    <td><i className="far fa-trash-alt" onClick={() => {this.props.removeFromCart(index)}}></i> <i className="fas fa-cart-plus" onClick={() => {this.props.addFromCart(index)}}></i></td>
                    </tr>
                )
            })
            displayTotal = (
                <tbody>
                <tr>
                <td></td>
                <td></td>
                <td>Subtotal</td>
                <td>${subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td>Tax</td>
                <td>${(subtotal * gst).toFixed(2)}</td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td>Total</td>
                <td>${(subtotal + gst).toFixed(2)}</td>
                </tr>
                </tbody>
            )
            displayCheckout = (
                <div align="right">
                <PaypalExpressBtn client={client} currency={'SGD'} total={(subtotal + gst).toFixed(2)} onSuccess={this.props.onSuccess} />
                </div>
            )
        }

        return (
            <div className="box">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Cost</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                        {displayShoppingCart}
                        {displayTotal}
                </table>
                {displayCheckout}
            </div>
        )
    }
};

export default Cart;