import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

const VideoListItem = props => {
  return (
    <div>
      <Card onClick ={() => props.onVideoSelect(props.video)} className="pt-0 pb-3 mb-4">
        <CardImg top width="100%" alt={props.title} className="media-object mr-3" src={props.src} />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle className=" pt-2"><b>{props.published}</b></CardSubtitle>
          <CardText className="pt-3 pb-1">{props.desc}</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    </div>
  )
}
export default VideoListItem;

