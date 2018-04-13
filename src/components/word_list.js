import React from 'react';
import VideoListItem from './video_list_item';
import _ from 'lodash';

function WordList(props) {
    console.log(props.words.map(word => word));
    

    return <h1>Hello, {props.word}</h1>;
  }


export default WordList;