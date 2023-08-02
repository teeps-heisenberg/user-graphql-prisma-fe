import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql", // Update the URL to your NestJS GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
