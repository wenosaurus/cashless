import React from 'react';

class Cart extends React.Component {
    render() {

        const array = this.props.displayCart;
        var displayShoppingCart;

        if (array.length < 1) {
            displayShoppingCart = "Your shopping cart is empty.";
        } else {
            displayShoppingCart = array.map((item, index) => {
                return (
                    <table>
                    <th>
                    <td>Name</td>
                    <td>Quantity</td>
                    <td>Cost</td>
                    <td>Delete</td>
                    </th>
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.count}</td>
                    <td>{item.price * item.count}</td>
                    <td><button onClick={() => {this.props.removeFromCart(index)}}>Remove</button></td>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td>Subtotal</td>
                    <td></td>
                    </tr>
                    </table>
                    )
            })
        }

        let subtotal = 0;

        for (var i = 0; i < array.length; i++) {
            subtotal += array[i].price * array[i].count
        };
        console.log(subtotal);

        return (
            <div>
            {displayShoppingCart}
            </div>
        )
    }
};

export default Cart;