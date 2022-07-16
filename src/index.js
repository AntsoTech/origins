import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
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

// Defining cache type policies to enable merges when quering again
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
						// Now that we have a reliable offset, the rest of this logic
						// is the same as in offsetLimitPagination.
						for (let i = 0; i < incoming.length; ++i) {
							merged[offset + i] = incoming[i];
						}
						return merged;
					},

					// If you always want to return the whole list, you can omit
					// this read function.
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

function offsetFromCursor(items, cursor, readField) {
	// Search from the back of the list because the cursor we're
	// looking for is typically the ID of the last item.
	for (let i = items.length - 1; i >= 0; --i) {
		const item = items[i];
		// Using readField works for both non-normalized objects
		// (returning item.id) and normalized references (returning
		// the id field from the referenced entity object), so it's
		// a good idea to use readField when you're not sure what
		// kind of elements you're dealing with.
		if (readField("id", item) === cursor) {
			// Add one because the cursor identifies the item just
			// before the first item in the page we care about.
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
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
