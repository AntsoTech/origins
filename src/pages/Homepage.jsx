import React from "react";
import { useQuery } from "@apollo/client";
import VideoCard from "../components/VideoCard";
import { GET_VIDEOS } from "../queries/GET_VIDEOS";
import VideoHome from "../components/VideoHome";
import "./homepage.css";
import { loadmore } from "../helpers/loadmore";

const Homepage = () => {
	// Using query to get testimoniales with Funzone tag and limit to 2
	const { loading, error, data, fetchMore } = useQuery(GET_VIDEOS, {
		variables: { after: "" },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error </p>;
	return (
		<div className="homepage">
			<VideoHome />
			<div className="homepage__allvideos">
				<h1 className="homepage__allvideos__title"> ALL VIDEOS </h1>
				<div className="homepage__allvideos__videolist">
					{data.allVideos.items.map((video) => (
						<VideoCard key={video.id} {...video} />
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
