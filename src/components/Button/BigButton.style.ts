import styled, { css } from 'styled-components';
import solid_colors from '../../styles/solid_colors';

type text_color = {
  text_color: string;
};
export interface ButtonStyleProps {
  height: number;
  color: keyof typeof import('../../styles/solid_colors')['default']['colors'];
}

export const StyledBigButton = styled.button<ButtonStyleProps>`
  ${({ color }) => css`
    background: ${solid_colors.colors[color]};
  `};

  display: flex;
  margin: auto;
  height: ${(p) => p.height}px;
  padding: 0px 30px;
  border: none;
  color: ${solid_colors.colors.white};
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Text = styled.div<text_color>`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  color: ${(p) => p.text_color};
  margin: auto;
`;
