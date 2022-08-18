import styled, { css } from "styled-components";
import theme from "../../styles/theme";

interface PokemonType {
  color_type: keyof typeof import("../../styles/theme")["default"]["colors"]["pokemon_types"];
}

export const PokemonCard = styled.li<PokemonType>`
  ${({ theme, color_type }) => css`
    background: ${(props) => theme.colors.pokemon_types[color_type]}; //<-
  `}
  border-radius: 10px;
  width: 210px;
  height: 140px;
  justify-content: left;
`;

export const PokemonImage = styled.img`
  width: 118.75px;
  height: 118.75px;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  height: 20%;
  width: 100%;
  position: relative;
`;

export const PokemonName = styled.h1`
  padding: 6px;
  border-radius: 10px;
  font-style: normal;
  font-size: 21px;
  color: ${theme.colors.background};
  text-transform: capitalize;
`;

export const PokemonType = styled.h2`
  display: inline-flex;
  margin-left: 10px;
  padding-left: 7px;
  padding-right: 7px;
  padding-bottom: 1px;
  padding-top: 1px;
  border-radius: 100px;
  font-weight: 500;
  color: white;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 24%);
`;
