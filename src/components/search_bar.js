import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
            <div className="search-bar row">
                <input 
                    placeholder="Check if your word can be banned."
                    value={this.state.term}
                    onChange={e => this.onInputChange(e.target.value)}
                />
               <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={200}>
                    {this.props.alert ? <div className="alert alert-danger col-md-6" role="alert">Oh snap! Change your word (<b>{this.state.term}</b>) because you will be banned.</div> : null}
               </ ReactCSSTransitionGroup>
               <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={200}>
                    {this.props.alertCorrect ? <div className="alert alert-success col-md-offset-6" role="alert">All right! You can use your word (<b>{this.state.term}</b>) freely.</div> : null}
               </ ReactCSSTransitionGroup>
            </div>
        ); 
    }
}

export default SearchBar;