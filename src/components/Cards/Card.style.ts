import styled, { css } from "styled-components";
import theme from "../../styles/theme";

interface PokemonType {
  color_type: keyof typeof import("../../styles/theme")["default"]["colors"]["pokemon_types"];
}

export const PokemonCard = styled.li<PokemonType>`
  ${({ theme, color_type }) => css`
    background: ${theme.colors.pokemon_types[color_type]}; //<-
  `}
  border-radius: 10px;
  justify-content: left;

  width: 210px;
  height: 140px;
  @media screen and (max-width: 480px) {
    width: 330px;
    height: 140px;
  }
`;

export const PokeballImage = styled.img`
  position: absolute;
  z-index: 0;
  width: 98px;
  opacity: 0.3;
  margin-left: 2px;
  top: -5px;
  @media screen and (max-width: 480px) {
    margin-left: 0px;
    top: -20px;
    width: 110px;
  }
`;

export const PokemonImage = styled.img`
  position: absolute;
  z-index: 1;
  width: 100px;
  top: -5px;
  @media screen and (max-width: 480px) {
    top: -20px;
    width: 120px;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  position: relative;
`;

export const LeftSide = styled.div`
  width: 50%;
  display: flex;
`;

export const PokemonContent = styled.div`
  display: flex;
`;

export const PokemonName = styled.h1`
  display: inline-block;
  padding: 6px;
  margin-left: 4px;
  border-radius: 10px;
  font-style: normal;
  font-size: 18px;
  color: ${theme.colors.background};
  text-transform: capitalize;
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const PokemonType = styled.h2`
  margin-left: 10px;
  margin-bottom: 5px;
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 1px;
  padding-top: 1px;
  border-radius: 50px;
  font-weight: 500;
  color: white;
  font-size: 15px;
  outline-style: solid;
  outline-width: 1px;
  outline-color: rgba(255, 255, 255, 0.6);
`;

export const PokemonTypeList = styled.div`
  margin-top: 6px;
  width: 50%;
`;
