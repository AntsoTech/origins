import { gql } from "@apollo/client";

export const GET_VIDEOS_WIHTAGS = gql`
	query ($tags: String!) {
		allVideos(tags: $tags, limit: 4) {
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
