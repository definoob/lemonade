import { NetworkStatus } from 'apollo-client';
import { GraphQLError } from 'graphql';
import { client } from '../../graphql/apollo';
import { QUERY_GET_HOME_EVENTS } from '../../graphql/query';
import { EventInterface } from '../actionTypes';

type ApolloQueryResut<T> = {
  data: Array<T>;
  errors?: ReadonlyArray<GraphQLError>;
  loading?: boolean;
  networkStatus?: NetworkStatus;
  stable?: boolean;
};

export const getDataFromGraphQL = async (
  longitude: number,
  latitude: number
): Promise<ApolloQueryResut<EventInterface>> => {
  return await client
    .query({
      query: QUERY_GET_HOME_EVENTS,
      variables: {
        longitude,
        latitude,
      },
    })
    .then((res) => res.data);
};
