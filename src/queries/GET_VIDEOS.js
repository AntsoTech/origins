import { gql } from "@apollo/client";

export const GET_VIDEOS = gql`
	query ($after: String!) {
		allVideos(limit: 4, after: $after) {
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
