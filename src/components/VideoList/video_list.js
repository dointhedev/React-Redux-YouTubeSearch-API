import React from 'react'
import {Col} from 'reactstrap';
import VideoListItem from './video_list_item';
import "./video.css";

const VideoList = props => {
    const videoItems = props
        .videos
        .map( video => {
            return <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video}
                title={video.snippet.title}
                src={video.snippet.thumbnails.high.url}
                published={video.snippet.publishedAt}
                desc={video.snippet.description}/>
        });
    return (
        <Col md="4">
            <ul className="list-group">
                {videoItems}
            </ul>
        </Col>
    );
}

export default VideoList;
