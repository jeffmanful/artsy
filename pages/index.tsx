import Head from 'next/head';
import styled from 'styled-components';
import useApolloClient from '../hooks/useApolloClient';
import ArtistList from '../ components/ArtistList';
import { Artist } from '../ components/types';
import Layout from '../ components/Layout';
import { popularArtistsQuery, artworkQuery } from '../queries';

interface Props {
  artists: Artist[],
  artwork?: any;
  featuredArtist?: Artist,
}

const FeatureImage = styled.img`
  width: 500px;
`;


const Home: React.FC<Props> = ({ artists, featuredArtist }) => {
  return (
    <Layout>
      <Head>
        <title>Artsy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <h1>Featured Artist</h1>
          <FeatureImage src={featuredArtist.image.url} />
        </section>
        <section>
          <h1>Works by popular artists</h1>
          <ArtistList artists={artists} />
        </section>
      </main>
    </Layout>
  )
}

// Fetch our data for the page from the server before client is rendered
export async function getStaticProps() {
  const client  = useApolloClient();

  // fetch popular artists
  const popularArtistResponse = await client.query({
    query: popularArtistsQuery
  });

  // fetch artwork
  const artworkResponse = await client.query({
    query: artworkQuery
  });

  const { artists } = popularArtistResponse.data.popular_artists;
  const { artwork } = artworkResponse.data;

  return { props: { artists, featuredArtist: artwork.artist }  }
}

export default Home;
