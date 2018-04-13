import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyA4rzfkCMJXDlSDG4pQU_qCJh6tATTSxRE';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            selectedVideo : null,
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
                {/* <VideoDetail video={this.state.selectedVideo} /> */}
                <h1>Movie List</h1>
             <ul>
                {this.state.words.map(word => {
                    return <li>{word}</li>
                })}
            </ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));