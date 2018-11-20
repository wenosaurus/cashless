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

        return (
            <div>
            {this.props.displayResult && this.props.displayResult.name}
            </div>
        )
    }
};

export default Product;