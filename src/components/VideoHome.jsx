import React from "react";
import ReactPlayer from "react-player";
import "./videohome.css";

const VideoHome = (urlVideo) => {
	return (
		<div className="videohome">
			<ReactPlayer
				controls
				playing
				muted
				width="100%"
				height="100%"
				url={urlVideo}
				light="../assets/videohome.png"
				className="videohome__player"
			/>
		</div>
	);
};

export default VideoHome;
