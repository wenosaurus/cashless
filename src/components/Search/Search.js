import React from 'react';

import PropTypes from 'prop-types';

class Search extends React.Component {
    render() {
        return (
            <div className="searchBox">
            <input value={this.props.query} onChange={this.props.onChange} className="form-control" />
            <br />
            <button onClick={this.props.onClick} className="btn btn-secondary">Search</button>
            </div>
        )
    }
};

export default Search;