import useApolloClient from "../../hooks/useApolloClient"
import { Artist, Image } from '../../ components/types';
import ArtistCard from "../../ components/ArtistCard";
import Layout from "../../ components/Layout";
import { P } from "../../ components/typography";
import { artistQuery } from "../../queries";

interface Props {
  artist: Artist,
  images: Image[],
}

const ArtistPage: React.FC<Props> = ({ artist }) => {
  return (
    <Layout>
      {artist && <ArtistCard artist={artist} />}
      <P>{artist?.blurb}</P>
    </Layout>
  )
}

// This gets called at build time 
export async function getStaticPaths() {
  return {
    // statically generate dynamic pages
    paths: [
      { params: { id: 'kerry-james-marshall' } },
      { params: { id: 'cindy-sherman' } },
    ],
    fallback: true
  }
}


export async function getStaticProps({ params }) {
  const client = useApolloClient();
   
  // get a single artist using id from params
  const response = await client.query({
    query: artistQuery,
    variables: { id: params.id } // params will contain id from [id] route
  });

  const { artist } = response.data;

  return { props: { artist } };
}

export default ArtistPage;