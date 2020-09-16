import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const useApolloClient = () => {
  // set up our client
  const client = new ApolloClient({
    uri: 'https://metaphysics-production.artsy.net/',
    cache: new InMemoryCache(),
  });

  return client;
}

export default useApolloClient;
