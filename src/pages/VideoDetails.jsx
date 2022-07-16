import React from "react";
import VideoHome from "../components/VideoHome";
import { useQuery } from "@apollo/client";
import { GET_VIDEODETAILS } from "../queries/GET_VIDEODETAILS";
// import VideoCard from "../components/VideoCard";
import "./videodetails.css";

const VideoDetails = ({ videoId }) => {
	// Using another query to get 4 videos for the previous url

	// Using query to get video details
	const { loading, error, data } = useQuery(GET_VIDEODETAILS, {
		variables: { id: videoId },
	});
	console.log(data);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error </p>;

	return (
		<div className="videodetails">
			<div className="videodetails__infos">
				<h1 className="videodetails__infos__name">{data.video.name}</h1>
				<h2 className="videodetails__infos__duration">
					{data.video.duration} s
				</h2>
			</div>
			<div className="videodetails__videowrapper">
				<VideoHome urlVideo="https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8" />
			</div>
			<div className="videodetails__description">{data.video.description}</div>
			<div className="videodetails__similar">
				<h2 className="videodetails__similar__title"> Similary contents </h2>
				{/* <div className="videodetails__similar__list">
					{data1.allVideos.items.map((video) => (
						<VideoCard key={video.id} {...video} />
					))}
				</div> */}
			</div>
		</div>
	);
};

export default VideoDetails;
