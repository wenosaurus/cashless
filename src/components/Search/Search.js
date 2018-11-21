import React from 'react';

import PropTypes from 'prop-types';

class Search extends React.Component {
    render() {
        return (
            <div>
            <input onChange={this.props.onChange} />
            <button onClick={this.props.onClick}>Search</button>
            </div>
        )
    }
};

export default Search;