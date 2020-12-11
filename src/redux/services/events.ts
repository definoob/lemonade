import { NetworkStatus } from 'apollo-client';
import { GraphQLError } from 'graphql';
import { client } from '../../graphql/apollo';
import { QUERY_GET_HOME_EVENTS } from '../../graphql/query';

interface Event {
  cover: string;
  host_expanded: {
    image_avatar: string;
  };
  title: string;
  start: string;
  end: string;
  latitude: number;
  longitude: number;
  cost: number;
  currency: string;
}

type ApolloQueryResut<T> = {
  data: T;
  errors?: ReadonlyArray<GraphQLError>;
  loading?: boolean;
  networkStatus?: NetworkStatus;
  stable?: boolean;
};

export const getDataFromGraphQL = async (
  longitude: number,
  latitude: number
): Promise<ApolloQueryResut<Event>> => {
  return await client.query({
    query: QUERY_GET_HOME_EVENTS,
    variables: {
      longitude,
      latitude,
    },
  });
};
