import React from "react";
import { useQuery } from "@apollo/client";
import VideoCard from "../components/VideoCard";
import { GET_TESTIMONIALES } from "../queries/GET_TESTIMONIALES";
import { loadmore } from "../helpers/loadmore";
import { Link } from "react-router-dom";
import "./testimoniales.css";

const Testimoniales = () => {
	// Using query to get testimoniales with testimoniales tag and limit to 4
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
					<Link
						to={`/videos/${video.id}`}
						state={{ tag: "Testimoniales" }}
						key={video.id}>
						<VideoCard key={video.id} {...video} />
					</Link>
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
