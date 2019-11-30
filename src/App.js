import React from 'react';
import Search from './components/Search';
import VideoList from './components/VideoList';
import youtube, { KEY } from './api/youtube';
import VideoDetail from './components/VideoDetail';

class App extends React.Component {
	state = {
		videos        : [],
		selectedVideo : null
	};

	onSearch = async (query) => {
		const res = await youtube.get('/search', {
			params : {
				part       : 'snippet',
				q          : query,
				maxResults : 5,
				key        : KEY
			}
		});
		this.setState({ videos: res.data.items });
	};

	onSelectVideo = (videoId) => {
		this.setState({ selectedVideo: videoId });
	};

	render () {
		return (
			<div>
				<Search onSearchClick={this.onSearch} />
				{!this.state.selectedVideo && (
					<div className='h1 mx-auto mt-3' style={{ textAlign: 'center' }}>
						Please Select Video after search
					</div>
				)}
				{this.state.selectedVideo && <VideoDetail videoId={this.state.selectedVideo} />}
				<VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo} />
			</div>
		);
	}
}

export default App;
