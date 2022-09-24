import styled, { css } from 'styled-components';
import solid_colors from '../../styles/solid_colors';

export interface ButtonStyleProps {
  height: number;
  color: keyof typeof import('../../styles/solid_colors')['default']['colors'];
}

export const StyledButton = styled.button<ButtonStyleProps>`
  ${({ color }) => css`
    background-color: ${solid_colors.colors[color]};
  `};

  display: block;
  margin: auto;
  padding: ${(p) => p.height}px 40px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: ${solid_colors.colors.white};
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  border-radius: 50px;
  margin-bottom: 10px;
`;
