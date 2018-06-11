
import React, { Component } from 'react';
import ReactDom from 'react-dom';

import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import { log } from 'util';

const API_KEY = 'AIzaSyCfDHSQ0t56OHyJX4m5WPb3qesztdDhgQM';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    });
  }


  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));