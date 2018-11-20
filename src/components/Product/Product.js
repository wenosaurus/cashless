import React from 'react';

class Product extends React.Component {
    render() {
        // const query = this.props.query;

        // let productNames = this.props.displayProduct.map((item, index) => {
        //     return (
        //         <li id={index}>{item.name}
        //         </li>
        //         )
        //     });

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
                </ul>
                )
        }

        console.log("DISPLAYING RESULT IN PRODUCT APP", this.props.displayResult);

        return (
            <div>
            {displayResultProduct}
            </div>
        )
    }
};

export default Product;