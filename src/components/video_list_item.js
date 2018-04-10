import React from 'react';

const VideoListItem = ({word}) => {
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-body">
                    <div className="media-heading">{word}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;