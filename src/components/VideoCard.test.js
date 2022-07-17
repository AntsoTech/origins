import React from "react";
import {
	render,
	cleanup,
	findByTestId,
	findByText,
} from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import { GET_VIDEOS } from "../queries/GET_VIDEOS";
import VideoCard from "./VideoCard";

const mocks = [
	{
		request: {
			query: GET_VIDEOS,
			variables: {
				id: "idVideo",
			},
		},
		result: {
			data: {
				allVideos: {
					items: {
						name: "name",
						duration: "duration",
						description: "description",
					},
				},
			},
		},
	},
];

describe("VideoCard", () => {
	afterEach(cleanup);

	it("should render name of the page", async () => {
		const { container } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
					<VideoCard  />
			</MockedProvider>
		);

		const nameElement = await findByTestId(container, "videoCard-title");
		const nameContent = await findByText(nameElement, "name");

		expect(nameElement).toBeTruthy();
		expect(nameContent).toBeTruthy();
	});
});
