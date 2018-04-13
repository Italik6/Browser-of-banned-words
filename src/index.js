import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import keyIndex from 'react-key-index';

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
        const words = keyIndex(this.state.words, 1);

        return (
            <div>
                <SearchBar onSearchTermChange={wordSearch} />
                <ul className="list-group">
                    {words.map(word => {
                        return <li key={word.id} className="list-group-item">{word.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));