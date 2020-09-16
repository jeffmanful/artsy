import Link from 'next/link';
import styled from 'styled-components';
import { ArtistName } from './styled';

const ArtistLink = ({ artist }) => (
  <Link key={artist.id} href={`/artists/${artist.id}`}>
    <ArtistName>{artist.name}</ArtistName>
  </Link>
)

export default ArtistLink;
