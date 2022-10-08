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
  background: linear-gradient(
    0deg,
    rgba(64, 76, 218, 1) 0%,
    rgba(83, 91, 221, 1) 100%
  );
`;

export const InfoCard = styled.div`
  background: red;
`;

export const Card = styled.div`
  display: grid;
  outline: 1px solid ${(p) => p.theme.colors.outline};
  padding: 16px;
  display: flex;
  position: relative;
  width: 85%;
  height: 80vh;
  border-radius: 32px;
  transition: background 0.2s ease;
  background: ${(p) => p.theme.colors.background};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
`;

export const PokemonName = styled.div`
  display: inline-flex;
  h1 {
    background-color: rgba(255, 255, 255, 0.15);
    outline: 1px solid rgba(255, 255, 255, 0.7);
  }
  font-size: 10px;
  margin: 10px;
  font-family: 'Roboto';
  color: ${(p) => p.theme.colors.text_default_color};
`;

export const PokemonImageCard = styled.div<PokemonType>`
  ${({ color_type }) => css`
    background: radial-gradient(
      circle,
      ${type_colors.pokemon_types[color_type]} 0%,
      rgba(0, 0, 0, 0) 70%
    );
  `};
  height: 250px;
  border-radius: 100%;
`;

export const PokemonImage = styled.img`
  width: 250px;
`;
