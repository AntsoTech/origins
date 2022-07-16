import { gql } from "@apollo/client";

export const GET_VIDEOS = gql`
		query {
			allVideos(limit: 4) {
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