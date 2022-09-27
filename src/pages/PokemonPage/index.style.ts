import styled, { css } from 'styled-components';
import type_colors from '../../styles/type_colors';

interface PokemonType {
  color_type: keyof typeof import('../../styles/type_colors')['default']['pokemon_types'];
}

export const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${(p) => p.theme.colors.dark_background};
`;

export const Card = styled.div`
  outline: 1px solid ${(p) => p.theme.colors.outline};
  margin-top: 40px;
  padding: 16px;
  display: flex;
  position: relative;
  width: 85%;
  height: 80vh;
  border-radius: 10px;
  background: ${(p) => p.theme.colors.background};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
`;

export const PokemonName = styled.div`
  display: inline-flex;
  h1 {
    background-color: rgba(255, 255, 255, 0.15);
    outline: 1px solid rgba(255, 255, 255, 0.7);
    color: red;
  }
  font-size: 10px;
  margin: 10px;
  font-family: 'Roboto';
  color: ${(p) => p.theme.colors.text_default_color};
`;

export const PokemonImageCard = styled.div<PokemonType>`
  ${({ color_type }) => css`
    background: ${type_colors.pokemon_types[color_type]};
  `};
  height: 250px;
  border-radius: 18px;
`;

export const PokemonImage = styled.img`
  width: 250px;
`;
