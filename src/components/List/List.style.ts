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
  margin-top: 64px;
  padding: 20px;
  gap: 2rem 2rem;

  box-sizing: border-box;
  list-style: none;

  @media (min-width: 320px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 668px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
