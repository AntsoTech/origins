import React from "react";

const VideoCard = (video) => {
	return (
		<div key={video.id}>
			<h3>{video.name}</h3>
			<img
				width="400"
				height="250"
				alt="location-reference"
				src={`${video.poster}`}
			/>
			<br />
			<b>Description :</b>
			<p>{video.description}</p>
			<br />
		</div>
	);
};

export default VideoCard;
