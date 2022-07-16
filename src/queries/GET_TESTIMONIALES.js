import { gql } from "@apollo/client";

export const GET_TESTIMONIALES = gql`
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