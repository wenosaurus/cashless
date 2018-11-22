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
                <table>
                <tbody>
                <tr>
                <td colSpan="2" align="center">
                <img src={this.props.displayResult.image} alt={this.props.displayResult.name} /></td>
                </tr>
                <tr>
                <td colSpan="2" align="center">
                <h3>{this.props.displayResult.name}</h3></td>
                </tr>
                <tr>
                <td>Price</td>
                <td>${this.props.displayResult.price}</td>
                </tr>
                <tr>
                <td>Brand</td>
                <td>{this.props.displayResult.brand}</td>
                </tr>
                <tr>
                <td>Category</td>
                <td>{this.props.displayResult.category}</td>
                </tr>
                <tr>
                <td colSpan="2"><strong>Description</strong><br />
                {this.props.displayResult.description}</td>
                </tr>
                <tr>
                <td colSpan="2" align="center"><button onClick={this.props.addToCart} className="btn btn-secondary">Add to Cart <i class="fas fa-cart-plus"></i></button></td>
                </tr>
                </tbody>
                </table>
                )
            }

        return (
            <div className="box">
            {displayResultProduct}
            </div>
        )
    }
};

export default Product;