import React from "react";
import { useQuery, gql } from "@apollo/client";
import VideoCard from "../components/VideoCard";
import "./testimoniales.css";

const Testimoniales = () => {
	// Get testimoniales with Funzone tag and limit to 2
	const GET_TESTIMONIALES = gql`
		query ($after: String!) {
			allVideos(tags: "Testimoniales", limit: 4, after: $after) {
				items {
					id
					name
					description
					poster
					mobilePoster
					poster
					url
					duration
				}
				cursor {
					after
				}
			}
		}
	`;
	const { loading, error, data, fetchMore } = useQuery(GET_TESTIMONIALES, {
		variables: { after: "" },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error </p>;

	// Create a fonction to load more content and fetch the first query with the next one
	const loadmore = () => {
		fetchMore({
			variables: {
				after: data.allVideos.cursor.after,
			},
			updateQuery: (
				previousResult,
				{ fetchMoreResult, variables: { after } }
			) => {
				console.log(previousResult, fetchMoreResult);
				return {
					allVideos: {
						cursor: fetchMoreResult.allVideos.cursor,
						items: [
							...previousResult.allVideos.items,
							...fetchMoreResult.allVideos.items,
						],
					},
				};
			},
		});
	};

	return (
		<div className="testimoniales">
			<h1 className="testimoniales__title"> Testimoniales </h1>
			<div className="testimoniales__videolist">
				{data.allVideos.items.map((video) => (
					<VideoCard key={video.id} {...video} />
				))}
			</div>
			{
				<button className="testimoniales__button" onClick={loadmore}>
					SHOW MORE
				</button>
			}
		</div>
	);
};

export default Testimoniales;
