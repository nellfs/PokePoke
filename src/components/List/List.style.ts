import styled from 'styled-components';

export const PokemonSection = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
`;

export const PokemonList = styled.ul`
  display: grid;
  margin-top: 70px;
  margin-bottom: 10px;
  grid-gap: 80px 30px;
  max-width: 1280px;
  width: 75%;

  list-style: none;

  @media (min-width: 320px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
