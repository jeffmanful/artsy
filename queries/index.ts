/**
 * Our queires for use throughout the application
 */

import { gql } from '@apollo/client';

export const popularArtistsQuery = gql`
  query PopularArtists {
    popular_artists(size: 12) {
      artists {
        _id
        id
        name
        years
        image {
          url
        }
      }
    }
  }
`;

export const artworkQuery = gql`
  query Artwork {
    artwork(id: "banksy") {
      title
      artist {
        _id
        id
        name
        years
        image {
          url
        }
      }
    }
  }
`;

export const artistQuery = gql`
  query Artist($id: String!) {
    artist(id: $id) {
      id
      name
      years
      blurb
      nationality 
      image {
        url
      }
    }
  }
`