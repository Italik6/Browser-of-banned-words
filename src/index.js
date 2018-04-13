import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            term: '',
            words: []
        };
    }

    componentDidMount() {
        fetch('https://m.dickssportinggoods.com/wcsstore/DicksSportingGoods//javascript/Common/bannedWords.json')
        .then(response => response.json())
        .then((json) => {
            this.setState({ words: json.bannedWords });
        });
    };

    wordSearch(term) {
       console.log(term);
       console.log(_.includes(this.state.words, term))
    }

    render() {
        const wordSearch = _.debounce((term) => { this.wordSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={wordSearch} />
                <ul className="list-group">
                    {this.state.words.map(word => {
                        return <li className="list-group-item">{word}</li>
                    })}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));