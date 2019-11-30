import React from 'react';

const VideoItem = (props) => {
	const onVideoItemClicked = () => {
		props.onSelectVideo(props.videoId);
	};
	return (
		<div className='card ml-2 mr-2 mt-2' style={{ width: '18rem' }} onClick={onVideoItemClicked}>
			<img className='card-img-top' src={props.image} alt={props.title} />
			<div className='card-body'>
				<p className='card-text'>{props.title}</p>
			</div>
		</div>
	);
};

export default VideoItem;
