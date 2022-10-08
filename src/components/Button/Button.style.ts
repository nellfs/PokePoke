import styled from 'styled-components';
import solid_colors from '../../styles/solid_colors';

export interface ButtonStyleProps {
  height: number;
}

export const StyledButton = styled.button<ButtonStyleProps>`
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
  background-color: ${solid_colors.colors.blue};
  transition: 0.3s;
  outline-offset: -1px;
  outline: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background-color: ${solid_colors.colors.dark_blue};
  }
`;
