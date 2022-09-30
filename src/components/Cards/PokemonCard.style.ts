import styled, { css } from 'styled-components';
import type_colors from '../../styles/type_colors';

type color_type =
  keyof typeof import('../../styles/type_colors')['default']['pokemon_types'];

interface PokemonType {
  color_type: color_type;
}

export const PokemonCardStyle = styled.li<PokemonType>`
  ${({ color_type }) => css`
    background: ${type_colors.pokemon_types[color_type]};
  `};
  position: relative;
  border-radius: 10px;
  justify-content: left;
  cursor: pointer;
  width: 210px;
  height: 140px;
  overflow: hidden;
  /* outline: 1px solid rgba(255, 255, 255, 0.6);
  outline-offset: -1px; */
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
  width: 120px;
  object-fit: contain;
  opacity: 0.3;
  top: 30px;
  @media screen and (max-width: 480px) {
    right: -10px;
    width: 130px;
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
  margin-top: 4px;
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

export const PokemonTypeIcon = styled.img`
  display: inline-block;
  margin-right: 5px;
  width: 14px;
`;

export const PokemonType = styled.h2<PokemonType>`
  background-color: rgba(255, 255, 255, 0.1);
  margin-left: 10px;
  margin-bottom: 6px;
  display: inline-flex;
  padding-left: 6px;
  padding-right: 6px;
  padding-bottom: 1px;
  padding-top: 1px;
  border-radius: 50px;
  font-weight: 500;
  font-family: 'Montserrat';
  font-size: 14px;
  color: white;
  outline: 1px solid rgba(255, 255, 255, 0.7);
`;

export const PokemonNumber = styled.h3`
  position: absolute;
  display: inline-block;
  border-radius: 50px;
  text-shadow: 0px 1.5px rgba(0, 0, 0, 0.2);
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
