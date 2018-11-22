import React from 'react';

import PropTypes from 'prop-types';

class Search extends React.Component {
    render() {
        return (
            <div className="col-sm-4">
            <input value={this.props.query} onChange={this.props.onChange} />
            <button onClick={this.props.onClick}>Search</button>
            </div>
        )
    }
};

export default Search;