import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
} from "@apollo/client";

// implemented the new apollo client with env variables and provide it to all the app with ApolloProvider
const link = new HttpLink({
	uri: `${process.env.REACT_APP_GRAPHQL_URL}`,
	headers: {
		"x-account-key": `${process.env.REACT_APP_ACCOUNT_KEY}`,
	},
});

// Defining cache type policies to enable merging when quering again
const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				feed: {
					keyArgs: ["type"],

					merge(existing, incoming, { args: { cursor }, readField }) {
						const merged = existing ? existing.slice(0) : [];
						let offset = offsetFromCursor(merged, cursor, readField);
						// If we couldn't find the cursor, default to appending to
						// the end of the list, so we don't lose any data.
						if (offset < 0) offset = merged.length;
						for (let i = 0; i < incoming.length; ++i) {
							merged[offset + i] = incoming[i];
						}
						return merged;
					},

					// If we dont want to return the whole list
					read(
						existing,
						{ args: { cursor, limit = existing.length }, readField }
					) {
						if (existing) {
							let offset = offsetFromCursor(existing, cursor, readField);
							// If we couldn't find the cursor, default to reading the
							// entire list.
							if (offset < 0) offset = 0;
							return existing.slice(offset, offset + limit);
						}
					},
				},
			},
		},
	},
});

// Function to get the offset from a cursor
function offsetFromCursor(items, cursor, readField) {
	// We search from the back of the list because cursor = ID of the last item.
	for (let i = items.length - 1; i >= 0; --i) {
		const item = items[i];
		if (readField("id", item) === cursor) {
			// Add one because the cursor identifies the item before the next item in the page
			return i + 1;
		}
	}
	// Report that the cursor could not be found.
	return -1;
}

const client = new ApolloClient({
	link,
	cache,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<HashRouter>
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
	</HashRouter>
);
