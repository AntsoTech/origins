import { gql } from "@apollo/client";

export const GET_FUNZONE = gql`
		query ($after: String!) {
			allVideos(tags: "Funzone", limit: 4, after: $after) {
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