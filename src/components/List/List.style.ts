import styled from "styled-components";

export const PokemonSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const PokemonList = styled.ul`
  display: grid;
  grid-gap: 10px;
  list-style: none;

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
