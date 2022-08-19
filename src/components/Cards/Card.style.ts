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
  width: 210px;
  height: 140px;
  justify-content: left;
`;

export const PokemonImage = styled.img`
z-index: 2;
  width: 110px;
`;

export const RightSide = styled.div`
  display: flex;
  position: absolute;
  justify-content: right;
  align-items: center;
  bottom: 75px;
  width: 100%;
  position: relative;
`;

export const PokemonName = styled.h1`
  padding: 6px;
  margin-left: 4px;
  border-radius: 10px;
  font-style: normal;
  font-size: 21px;
  color: ${theme.colors.background};
  text-transform: capitalize;
`;

export const PokemonType = styled.h2<PokemonType>`
${({theme, color_type})=> css`
background-color: ${theme.colors.pokemon_types[color_type]};
`
}  
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
  outline-color: rgba(255, 255, 255, .3);

`;

export const PokemonTypeList = styled.div`
margin-top: 5px;
width: 50%;
`

export const PokeballImage = styled.img`
margin-right: 4px;
z-index: 1;
display: flex;
position: absolute;
width: 100px;
opacity: .3;
`