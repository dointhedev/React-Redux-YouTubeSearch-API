import React, {Component} from "react";
import {Container, Row} from 'reactstrap';
import VideoDetail from './components/VideoList/video_details';
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList/video_list";

const API_KEY = "AIzaSyBGeM99z6sy3km8XDDu3mMXq8IqGVR97LQ";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('Technology')
    }

    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term
        }, videos => {
            console.log(videos)
            this.setState({videos: videos, selectedVideo: videos[0]})
        })

    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange = {term => this.videoSearch(term) } />
                <Container className="video d-flex justify-content-center">
                    <Row>
                        <VideoDetail video={this.state.selectedVideo}/>
                        <VideoList
                            onVideoSelect=
                            {selectedVideo => this.setState({selectedVideo})}
                            videos={this.state.videos}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
