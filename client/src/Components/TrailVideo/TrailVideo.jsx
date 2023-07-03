import React from 'react';

import classes from './TrailVideo.module.css';

const TrailVideo = ({ url }) => {
	const getEmbed = url => {
		const urlWithEmbed = 'https://www.youtube.com/embed/' + url.split('/').slice(-1)[0];
		return urlWithEmbed.replace('watch?v=', '');
	};

	return (
		<div className={classes.video}>
			<p className={`${classes.text} ${classes.text_center}`}>Видео заезда по данному маршруту</p>
			<iframe
				className={classes.iframe}
				src={getEmbed(url)}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</div>
	);
};
export default TrailVideo;
