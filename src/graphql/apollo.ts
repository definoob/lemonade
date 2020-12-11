import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { getBackendURL } from './config';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: getBackendURL(),
});

export const client = new ApolloClient({
  cache,
  link,
});
