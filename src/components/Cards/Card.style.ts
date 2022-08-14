import styled, { css } from "styled-components";
import theme from "../../styles/theme";

interface PokemonType {
  color_type: keyof typeof import("../../styles/theme")["default"]["colors"]["pokemon_types"];
}

export const PokemonCard = styled.div<PokemonType>`
  ${({ theme, color_type }) => css`
    background: ${(props) => theme.colors.pokemon_types[color_type]}; //<-
  `}
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 14rem;
  border-radius: 16px;
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokemonImage = styled.img`
  margin: 0px;
  width: 100px;
  padding: 0px;
`;

export const PokemonText = styled.h1`
  color: ${(props) => theme.colors.white};
  font-size: 20px;
`;

export const PokemonTypesCard = styled.h1`
  color: ${(props) => theme.colors.white};
  margin: 1px;
  font-size: 14px;
  background-color: rgb(255, 255, 255, 26%);
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
`;
