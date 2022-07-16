import React from "react";
import { useQuery } from "@apollo/client";
import VideoCard from "../components/VideoCard";
import { GET_VIDEOS } from "../queries/GET_VIDEOS";
import VideoHome from "../components/VideoHome";
import { loadmore } from "../helpers/loadmore";
import { Link } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
	// Using query to get all videos
	const { loading, error, data, fetchMore } = useQuery(GET_VIDEOS, {
		variables: { after: "" },
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error </p>;

	return (
		<div className="homepage">
			<VideoHome
				urlVideo="https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8"
				poster="../assets/videohome.png"
			/>
			<div className="homepage__allvideos">
				<h1 className="homepage__allvideos__title"> ALL VIDEOS </h1>
				<div className="homepage__allvideos__videolist">
					{data.allVideos.items.map((video) => (
						<Link
							to={`/videos/${video.id}`}
							state={{ tag: "Testimoniales" }}
							key={video.id}>
							<VideoCard key={video.id} {...video} />
						</Link>
					))}
				</div>
				<button
					className="homepage__allvideos__button"
					onClick={() => loadmore(data, fetchMore)}>
					SHOW MORE
				</button>
			</div>
		</div>
	);
};

export default Homepage;
