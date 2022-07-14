import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink
} from "@apollo/client";

// const endpointLink = new ApolloLink((operation, forward) => {
// 	operation.setContext(({ headers }) => ({ headers: {
// 		"x-account-key": `${process.env.REACT_APP_ACCOUNT_KEY}`, // however you get your token
// 	  ...headers
// 	}}));
// 	return forward(operation);
//   });

// implemented the new apollo client with env variables and provide it to all the app with ApolloProvider
const link = new HttpLink({
  uri: `${process.env.REACT_APP_GRAPHQL_URL}`,
  headers: {
	"x-account-key": `${process.env.REACT_APP_ACCOUNT_KEY}`
  }
});
const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
