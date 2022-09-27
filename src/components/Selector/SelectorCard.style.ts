import styled, { css } from 'styled-components';
import solid_colors from '../../styles/solid_colors';
import type_colors from '../../styles/type_colors';
('../../styles/solid_colors');

export interface SelectorStyleProps {
  color: keyof typeof import('../../styles/type_colors')['default']['pokemon_types'];
}

export const SelectorCardStyle = styled.div<SelectorStyleProps>`
  background-color: ${solid_colors.colors.white};
  outline: 1px solid rgba(255, 255, 255, 0.6);
  outline-offset: -1px;
  ${({ color }) => css`
    background: ${type_colors.pokemon_types[color]};
  `};
  color: ${solid_colors.colors.white};
  display: flex;
  flex-direction: row;
  height: 210px;
  width: 120px;
  justify-content: space-between;
  font-weight: 500;
  align-items: center;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 24px;
`;

export const SelectorImage = styled.img`
  object-fit: contain;
  margin-right: 40px;
  width: 80px;
`;

export const SelectorText = styled.div`
  margin: auto;
  font-size: 20px;
`;
