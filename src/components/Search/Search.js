import React from 'react';

import PropTypes from 'prop-types';

class Search extends React.Component {
    render() {
        const {products} = this.props;
        const productNames = products.map((product, index) => (
            <button onClick={() => this.props.selectClick(index)} key={product.itemId}>
            {product.name}
            </button>
    ));
        return (
            <div>
            <input onChange={this.props.onChange} />
            <button onClick={this.props.onClick}>Search</button>
            </div>
        )
    }
};

export default Search;