import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    padding: 1rem 2rem 1rem 1rem;
    list-style: none;
    display: flex;
    align-items: flex-start;

    img {
      max-height: 80px;
      margin: 0 1rem 0 0;
    }
  }
  padding: 0;
`;

export const ArtistName = styled.p`
  font-size: 30px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
