import styled, { css } from 'styled-components';
import type_colors from '../../styles/type_colors';

type color_type =
  keyof typeof import('../../styles/type_colors')['default']['pokemon_types'];

interface PokemonType {
  color_type: color_type;
}

export const PokemonCardStyle = styled.li`
  position: relative;
  border: 1px solid ${(p) => p.theme.colors.outline};
  border-radius: 16px;
  justify-content: left;
  cursor: pointer;
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 269px;
  overflow: hidden;
`;

export const PokeballImage = styled.img`
  position: absolute;
  z-index: 0;
  left: 14px;
  width: 166px;
  object-fit: contain;
  top: 34px;
  opacity: 0.1;
  filter: brightness(0%);
`;

export const TopBar = styled.div`
  height: 31px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonNumber = styled.div`
  color: ${(p) => p.theme.colors.text_default_color};
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  margin-right: 14px;
`;

export const BottomBar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 52px;
  bottom: 0px;
`;

export const PokemonImage = styled.img`
  position: absolute;
  z-index: 0;
  right: 0;
  left: 0;
  bottom: 42px;
  margin: auto;
  width: 163px;
`;

export const PokemonContent = styled.div`
  display: flex;
`;

export const PokemonName = styled.h1`
  font-weight: 700;
  z-index: 1;
  display: inline-flex;
  padding: 0px 5px;
  margin-left: 4px;
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  color: ${(p) => p.theme.colors.text_default_color};
  border-radius: 50px;
  border: 1px solid ${(p) => p.theme.colors.outline};
  text-transform: capitalize;
`;

export const PokemonTypeIcon = styled.img`
  display: inline-block;
  margin-right: 5px;
  width: 14px;
`;

export const PokemonType = styled.h2<PokemonType>`
  ${({ color_type }) => css`
    background: ${type_colors.pokemon_types[color_type]};
  `};
  display: inline-flex;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 2px;
  padding-top: 2px;
  border-radius: 24px;
  font-weight: 500;
  font-family: 'Montserrat';
  font-size: 14px;
  color: white;
`;

export const PokemonTypeList = styled.div`
  gap: 6px;
  display: flex;
`;
