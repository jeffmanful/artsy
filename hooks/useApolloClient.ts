import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// a simple way to re-use the Apollo client throughout the app, can add config here as needed
const useApolloClient = () => {
  // set up our client
  const client = new ApolloClient({
    uri: 'https://metaphysics-production.artsy.net/',
    cache: new InMemoryCache(),
  });

  return client;
}

export default useApolloClient;
