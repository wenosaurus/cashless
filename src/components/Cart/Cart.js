import React from 'react';

class Cart extends React.Component {
    render() {
        return (
            <div>
            <input onChange={this.props.onChange} />
            </div>
        )
    }
};

export default Cart;