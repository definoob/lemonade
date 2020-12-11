import gql from 'graphql-tag';

export const QUERY_GET_HOME_EVENTS = gql`
  query($longitude: Float, $latitude: Float) {
    getHomeEvents(longitude: $longitude, latitude: $latitude) {
      cover
      host_expanded {
        image_avatar
      }
      title
      start
      end
      latitude
      longitude
      cost
      currency
    }
  }
`;
