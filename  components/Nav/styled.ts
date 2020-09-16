import styled from 'styled-components';

export const StyledNavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    margin: 1em 1em 0 0;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
