import React from 'react';

class Cart extends React.Component {
    render() {

        const array = this.props.displayCart;
        const loadCart = JSON.parse(localStorage.getItem("shoppingCart"));
        console.log("LOAD CART", loadCart);
        let displayShoppingCart;
        let displayTotal;

        if (array.length < 1) {
            displayShoppingCart = (
                <tr><td colspan="4">
                Your shopping cart is empty.
                </td></tr>
                )
        } else {
            let subtotal = 0;
            let gst = 0.07;
            for (var i = 0; i < array.length; i++) {
                subtotal += array[i].price * array[i].count
            };
            displayShoppingCart = array.map((item, index) => {
                return (
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.count}</td>
                    <td>{(item.price * item.count).toFixed(2)}</td>
                    <td><button onClick={() => {this.props.removeFromCart(index)}}>Remove</button></td>
                    </tr>
                    )
            })
            displayTotal = (
                <tbody>
                <tr>
                <td></td>
                <td></td>
                <td>Subtotal</td>
                <td>{subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td>GST</td>
                <td>{(subtotal * gst).toFixed(2)}</td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td>Total</td>
                <td>{(subtotal + gst).toFixed(2)}</td>
                </tr>
                </tbody>
            )
        }

        return (
            <div>
                <table class="table">
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
            </div>
        )
    }
};

export default Cart;