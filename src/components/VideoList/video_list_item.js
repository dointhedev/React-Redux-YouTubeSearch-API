import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const VideoListItem = props => {
  return (
    <div>
      <Card onClick ={() => this.onVideoSelect(props)} className="pt-0 pb-3 mb-4">
        <CardImg top width="100%" alt={props.title} className="media-object mr-3" src={props.src} />
        <CardBody>
          <CardTitle><h4>{props.title}</h4></CardTitle>
          <CardSubtitle className=" pt-2"><b>{props.published}</b></CardSubtitle>
          <CardText className="pt-3 pb-1">{props.desc}</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    </div>
  )
}
export default VideoListItem;

