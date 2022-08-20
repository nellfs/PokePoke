import styled from "styled-components";

export const PokemonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const PokemonList = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
`;
