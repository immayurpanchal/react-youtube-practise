import React from 'react';

const VideoDetail = (props) => {
	return (
		<div className='card'>
			<iframe
				className='mt-2 mb-2 mx-auto'
				title='test'
				width='560'
				height='315'
				src={`https://www.youtube.com/embed/${props.videoId}`}
				frameBorder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			/>
		</div>
	);
};

export default VideoDetail;
