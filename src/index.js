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
            buttonLabel: 'Show full list',
            alertDialog: false,
            correctDialog: false
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

    wordSearch (term) {      
        if(_.includes(this.state.words, term)) {
            this.setState({ alertDialog: true, correctDialog: false });
        } else if (term === "") {
            this.setState({ correctDialog: false, alertDialog: false });
        } else {
            this.setState({ correctDialog: true, alertDialog: false });
        };
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
                <SearchBar onSearchTermChange={wordSearch} alert={this.state.alertDialog} alertCorrect={this.state.correctDialog} />
                <div className="row">
                    <button type="button" 
                        className="btn btn-default m-b-20"
                        onClick={this.showList}>
                            {this.state.buttonLabel}
                    </button> 
                    {this.state.visibilityList ? <WordList words={this.state.words} /> : null}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));