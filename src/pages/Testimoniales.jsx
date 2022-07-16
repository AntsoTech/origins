import React from "react";
import { useQuery } from "@apollo/client";
import VideoCard from "../components/VideoCard";
import "./testimoniales.css";
import { GET_TESTIMONIALES } from "../queries/GET_TESTIMONIALES";
import { loadmore } from "../helpers/loadmore";

const Testimoniales = () => {
	// Using query to get testimoniales with Funzone tag and limit to 2
	const { loading, error, data, fetchMore } = useQuery(GET_TESTIMONIALES, {
		variables: { after: "" },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error </p>;

	return (
		<div className="testimoniales">
			<h1 className="testimoniales__title"> Testimoniales </h1>
			<div className="testimoniales__videolist">
				{data.allVideos.items.map((video) => (
					<VideoCard key={video.id} {...video} />
				))}
			</div>
			{
				<button
					className="testimoniales__button"
					onClick={() => loadmore(data, fetchMore)}>
					SHOW MORE
				</button>
			}
		</div>
	);
};

export default Testimoniales;
