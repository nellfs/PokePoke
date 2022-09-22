import styled, { css } from 'styled-components';

export interface ButtonStyleProps {
  height: number;
  color: keyof typeof import('../../styles/themes/light')['default']['colors'];
}

export const StyledButton = styled.button<ButtonStyleProps>`
  ${({ color }) => css`
    background-color: ${(p) => p.theme.colors[color]};
  `};

  display: block;
  margin: auto;
  padding: ${(p) => p.height}px 40px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.text_default_color};
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  border-radius: 50px;
  margin-bottom: 10px;
  border: 1px solid ${(p) => p.theme.colors.outline};
`;
