import React from 'react'
import {
    Col,
    Card,
    CardHeader,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;

    const url = `https://www.youtube.com/embed/${videoId}`
    console.log(url)
    return (
        <Col md="8">
            <Card className=" video-details pt-0 pb-3 mb-4">
                <CardHeader>
                    <iframe
                        width="710"
                        height="315"
                        src={url}
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen></iframe>
                </CardHeader>
                <CardBody>
                    <CardTitle>
                        <h4>{video.snippet.title}</h4>
                    </CardTitle>
                    <CardSubtitle className=" pt-2">
                        <b>{video.snippet.publishedAt}</b>
                    </CardSubtitle>
                    <CardText className="pt-3 pb-1">{video.snippet.description}</CardText>
                    {/* <Button>Button</Button> */}
                </CardBody>
            </Card>
        </Col>
    );
};

export default VideoDetail;
