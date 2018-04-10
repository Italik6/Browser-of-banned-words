import React from 'react';

const VideoDetail = (props) => {
    const video = props.video;
    
    if (!video) {
        return <div className="loading">Search your favourite movies from YT. Enjoy!</div>;
    }

    const videoTitle = video.snippet.title;
    const videoChannel = video.snippet.channelTitle;
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{videoTitle}</div>
                <div>{videoChannel}</div>
            </div>
        </div>
    )
};

export default VideoDetail;