import React from 'react'
import { Artist } from '../types';
import { Wrapper } from './styled';

interface Props {
  artist: Artist,
}

const ArtistCard: React.FC<Props> = ({ artist }): JSX.Element => {
  return (
    <Wrapper>
        <h1>{artist.name}</h1>
        <img src={artist?.image.url} />

        <p>{`${artist.nationality} ${artist.years}`}</p>
    </Wrapper>
  )
}

export default ArtistCard;
