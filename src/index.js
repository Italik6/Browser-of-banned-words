import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import WordList from './components/word_list';
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

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
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