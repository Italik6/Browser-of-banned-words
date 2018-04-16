import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    placeholder="Check if your word can be banned."
                    value={this.state.term}
                    onChange={e => this.onInputChange(e.target.value)}
                />
               {this.props.alert && this.state.term !== '' ? <div className="alert alert-danger" role="alert">Oh snap! Change a "{this.state.term}" word because you will be banned.</div> : 
               <div className="alert alert-success" role="alert">All right! You can use "{this.state.term}" word freely.</div>}
            </div>
        ); 
    }
}

export default SearchBar;