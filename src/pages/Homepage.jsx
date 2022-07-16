import React from "react";
import { useQuery } from "@apollo/client";
import VideoCard from "../components/VideoCard";
import { GET_VIDEOS } from "../queries/GET_VIDEOS";

const Homepage = () => {
	const { loading, error, data } = useQuery(GET_VIDEOS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error </p>;

	console.log(data);

	return (
		<div className="homepage">
			<h1 className="homepage__title"> HOMEPAGE </h1>
			<div className="homepage__videolist">
				{data.allVideos.items.map((video) => (
					<VideoCard key={video.id} {...video} />
				))}
			</div>
			{<button className="homepage__button">SHOW MORE</button>}
		</div>
	);
};

export default Homepage;
