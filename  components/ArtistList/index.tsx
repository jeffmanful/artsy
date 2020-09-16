import { Artist as ArtistProps } from "../types";
import ArtistLink from './ArtistLink';
import { StyledList } from "./styled";

interface Props {
  artists?: ArtistProps[]
}

const ArtistList: React.FC<Props> = ({ artists }) => {
  return (
    <StyledList>
      {artists?.map(artist => (
        <li key={artist.id}>
          <img src={artist.image?.url} />
          <ArtistLink artist={artist} />
        </li>
      ))}
    </StyledList>
  )
}

export default ArtistList;
