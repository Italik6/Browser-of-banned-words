import React, { Component } from 'react';

class SearchBar extends Component {
    
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    render() {
        return (
            <div className="search-bar">
                <input 
                    placeholder="Check if your word can be banned."
                    value={this.state.term}
                    onChange={e => this.onInputChange(e.target.value)}
                />
                <p>{this.state.term}</p>
            </div>
        ); 
    }
}

export default SearchBar;