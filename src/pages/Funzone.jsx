import React from "react";
import { useQuery } from "@apollo/client";
import VideoCard from "../components/VideoCard";
import "./funzone.css";
import { GET_FUNZONE } from "../queries/GET_FUNZONE";
import { loadmore } from "../helpers/loadmore";
import { Link } from "react-router-dom";

const Funzone = () => {
	// Using query to get testimoniales with Funzone tag and limit to 2
	const { loading, error, data, fetchMore } = useQuery(GET_FUNZONE, {
		variables: { after: "" },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error </p>;

	return (
		<div className="funzone">
			<h1 className="funzone__title"> Funzone </h1>
			<div className="funzone__videolist">
				{data.allVideos.items.map((video) => (
					<Link
						to={`/videos/${video.id}`}
						state={{ tag: "Funzone" }}
						key={video.id}>
						<VideoCard key={video.id} {...video} />
					</Link>
				))}
			</div>
			{
				<button
					className="funzone__button"
					onClick={() => loadmore(data, fetchMore)}>
					SHOW MORE
				</button>
			}
		</div>
	);
};

export default Funzone;
