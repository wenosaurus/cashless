import React from 'react';

class Product extends React.Component {
    render() {

        var displayResultProduct;

        if (this.props.displayResult === null) {
            displayResultProduct = "Ready";
        } else if (this.props.displayResult === "N/A") {
            displayResultProduct = this.props.displayResult;
        } else {
            displayResultProduct = (
                <ul>
                <li>{this.props.displayResult.name}</li>
                <li>{this.props.displayResult.brand}</li>
                <li>{this.props.displayResult.category}</li>
                <li>{this.props.displayResult.price}</li>
                <button onClick={this.props.addToCart}>Add to Cart</button>
                </ul>
                )
            }

        return (
            <div>
            {displayResultProduct}
            </div>
        )
    }
};

export default Product;