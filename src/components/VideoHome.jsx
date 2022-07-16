import React from "react";
import ReactPlayer from "react-player";
import "./videohome.css";

const VideoHome = () => {
	const urlVideoHome =
		"https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8";
	return (
		<div className="videohome">
			<ReactPlayer
				controls
				playing
				muted
				width="100%"
				height="100%"
				url={urlVideoHome}
				light="../assets/videohome.png"
				className="videohome__player"
			/>
		</div>
	);
};

export default VideoHome;
