import styled, { css } from 'styled-components';
import type_colors from '../../styles/type_colors';
interface PokemonType {
  color_type: keyof typeof import('../../styles/type_colors')['default']['pokemon_types'];
}

export const PokemonCardStyle = styled.li<PokemonType>`
  ${({ color_type }) => css`
    background: ${type_colors.pokemon_types[color_type]};
  `};
  position: relative;
  border-radius: 12px;
  justify-content: left;
  cursor: pointer;
  width: 210px;
  height: 140px;
  @media screen and (max-width: 480px) {
    width: 330px;
    height: 140px;
  }
  @media screen and (max-width: 350px) {
    width: 260px;
    height: 140px;
  }
`;

export const PokeballImage = styled.img`
  position: absolute;
  z-index: 0;
  width: 98px;
  opacity: 0.3;
  top: 26px;
  @media screen and (max-width: 480px) {
    right: 8px;
    width: 110px;
  }
`;

export const PokemonImage = styled.img`
  position: absolute;
  z-index: 1;
  width: 110px;
  right: 2px;
  top: 25px;
  @media screen and (max-width: 480px) {
    top: 20px;
    width: 120px;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  position: relative;
`;

export const LeftSide = styled.div`
  width: 50%;
  position: relative;
  display: flex;
`;

export const PokemonContent = styled.div`
  display: flex;
`;

export const PokemonName = styled.h1`
  font-weight: 600;
  display: flex;
  position: absolute;
  padding: 6px;
  margin-left: 4px;
  font-style: normal;
  font-size: 18px;
  color: white;
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

export const PokemonNumber = styled.h3`
  position: absolute;
  display: inline-block;
  border-radius: 50px;
  text-shadow: 1.5px 1.5px rgba(0, 0, 0, 0.3);
  z-index: 1;
  right: 10px;
  bottom: 2px;
  font-weight: 600;
  color: white;
  font-size: 14px;
`;

export const PokemonTypeList = styled.div`
  margin-top: 45px;
  width: 50%;
`;
