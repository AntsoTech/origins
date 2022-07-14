import React from "react";
import { useQuery, gql } from "@apollo/client";

const Homepage = () => {
	const GET_VIDEOS = gql`
		query allvideos {
			allVideos {
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
			}
		}
	`;

	const { loading, error, data } = useQuery(GET_VIDEOS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error </p>;

	console.log(data);

	return data.allVideos.items.map(({ id, name, description, poster }) => (
		<div key={id}>
			<h3>{name}</h3>
			<img
				width="400"
				height="250"
				alt="location-reference"
				src={`${poster}`}
			/>
			<br />
			<b>About this location:</b>
			<p>{description}</p>
			<br />
		</div>
	));
};

export default Homepage;
