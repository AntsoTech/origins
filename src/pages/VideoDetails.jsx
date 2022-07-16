import React from "react";
import VideoHome from "../components/VideoHome";
import { useQuery } from "@apollo/client";
import { GET_VIDEODETAILS } from "../queries/GET_VIDEODETAILS";
import { GET_VIDEOS_WIHTAGS } from "../queries/GET_VIDEOS_WITHTAGS";
import VideoCard from "../components/VideoCard";
import { useParams, useLocation, Link } from "react-router-dom";
import "./videodetails.css";

const VideoDetails = (props) => {
	// Collect the video ID with params
	const { idVideo } = useParams();

	// Collect a state from link
	const location = useLocation();
	const state = location.state;

	// Using a query to get video details
	const { loading, error, data } = useQuery(GET_VIDEODETAILS, {
		variables: { id: idVideo },
	});

	// Using a query to get 4 videos from the previous url
	const {
		loading: loading1,
		error: error1,
		data: similarcontent,
	} = useQuery(GET_VIDEOS_WIHTAGS, {
		variables: { tags: state.tag },
	});

	// Handling loading and errors
	if (loading || loading1) return <p>Loading...</p>;
	if (error || error1) return <p>Error </p>;

	return (
		<div className="videodetails">
			<div className="videodetails__infos">
				<h1 className="videodetails__infos__name">{data.video.name}</h1>
				<h2 className="videodetails__infos__duration">
					{data.video.duration} s
				</h2>
			</div>
			<div className="videodetails__videowrapper">
				<VideoHome
					urlVideo="https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8"
					poster={data.video.poster}
				/>
			</div>
			<div className="videodetails__description">{data.video.description}</div>
			<div className="videodetails__similar">
				<h2 className="videodetails__similar__title"> SIMILAR CONTENT </h2>
				<div className="videodetails__similar__list">
					{similarcontent.allVideos.items.map((video) => (
						<Link
							to={`/videos/${video.id}`}
							state={{ tag: "Testimoniales" }}
							key={video.id}>
							<VideoCard key={video.id} {...video} />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default VideoDetails;
