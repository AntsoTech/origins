import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
} from "@apollo/client";

// implemented the new apollo client with env variables and provide it to all the app with ApolloProvider
const client = new ApolloClient({
	uri: `${process.env.REACT_APP_GRAPHQL_URL}`,
	cache: new InMemoryCache(),
	headers: {
		"x-account-key": `${process.env.REACT_APP_ACCOUNT_KEY}`
	  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
