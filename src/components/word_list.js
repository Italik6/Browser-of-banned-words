import React from 'react';
import VideoListItem from './video_list_item'

const WordList = (props) => {
    // const wordItems = props.words.map((word) => {
        return (
            <VideoListItem 
                // key={video.etag} 
                // word={word}   
            />
        )
    // });

    return (
        <ul className="col-md-4 list-group">
            {wordItems}
        </ul>
    );
};

export default WordList;