import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

import WordList from './components/word_list';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            words: [],
            visibilityList: false,
            buttonLabel: 'Show full list'
        };

        this.showList = this.showList.bind(this);
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

    showList () {
        if (this.state.visibilityList === true) {
            this.setState({buttonLabel: "Show full list", visibilityList: false});
        } else {
            this.setState({buttonLabel: "Hide full list", visibilityList: true});
        }
        
    }

    render() {
        const wordSearch = _.debounce((term) => { this.wordSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={wordSearch} />
                <button type="button" 
                    className="btn btn-default"
                    onClick={this.showList}>
                        {this.state.buttonLabel}
                </button> 
                {this.state.visibilityList ? <WordList words={this.state.words} /> : null}

            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));