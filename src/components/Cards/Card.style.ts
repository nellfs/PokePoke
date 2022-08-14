import styled, { css } from "styled-components";

interface PokemonType {
  type: string;
}

export const PokemonCard = styled.div<PokemonType>`
  ${({ theme, type }) => css`
    background: ${theme.colors.pokemon_types.grass};
  `}
  display: flex;
  flex-direction: column;
  width: 280px;

  // i want to use the 'grass' prop to reference props.theme.colors.grass in background

  background: ${(props) => props.color};
  height: 320px;
  margin: 0 auto;
  outline-color: red;
  outline-offset: 10px;

  img {
    height: 90%;
  }

  h1 {
    background-color: red;
  }
`;
