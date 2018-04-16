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
               {this.props.alert ? <div className="alert alert-danger" role="alert">Oh snap! Change your word (<b>{this.state.term}</b>) because you will be banned.</div> : null}
               {this.props.alertCorrect ? <div className="alert alert-success" role="alert">All right! You can use your word (<b>{this.state.term}</b>) freely.</div> : null}
            </div>
        ); 
    }
}

export default SearchBar;