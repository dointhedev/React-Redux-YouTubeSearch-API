import React from 'react'
import {Col} from 'reactstrap';
import VideoListItem from './video_list_item';
import "./video.css";

const VideoList = (props) => {
    return (
        <Col md="4">
            <ul className="list-group">
                {props
                    .videos
                    .map(video => (<VideoListItem
                        onVideoSelect = {this.onVideoSelect}
                        key={video.etag}
                        title={video.snippet.title}
                        src={video.snippet.thumbnails.default.url}
                        published={video.snippet.publishedAt}
                        desc={video.snippet.description}/>))}
            </ul>
        </Col>
    );
}

export default VideoList;
