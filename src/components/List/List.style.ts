import styled from 'styled-components';

export const PokemonSection = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Background = styled.div`
  background-color: ${(p) => p.theme.colors.primary};
  position: absolute;
  width: 100%;
  top: 0;
`;

export const PokemonList = styled.ul`
  display: grid;
  grid-gap: 10px;
  list-style: none;
  padding: 10px;
  background-color: ${(p) => p.theme.colors.background};

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 668px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
