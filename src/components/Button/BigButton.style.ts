import styled, { css } from 'styled-components';
import solid_colors from '../../styles/solid_colors';

export interface ButtonStyleProps {
  height: number;
  color: keyof typeof import('../../styles/solid_colors')['default']['colors'];
}

export const StyledBigButton = styled.button<ButtonStyleProps>`
  ${({ color }) => css`
    background: ${solid_colors.colors[color]};
  `};

  display: block;
  margin: auto;
  height: ${(p) => p.height}px;
  width: 220px;
  border: none;
  font-size: 16px;
  color: ${solid_colors.colors.white};
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  border-radius: 16px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
`;

export const Text = styled.div`
  margin-left: 12px;
  display: flex;
`;
