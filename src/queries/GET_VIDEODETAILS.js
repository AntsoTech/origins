import { gql } from "@apollo/client";

export const GET_VIDEODETAILS = gql`
	query ($id: ID!) {
		video(id: $id) {
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
`;
