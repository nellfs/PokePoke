import styled from 'styled-components';

interface Props {
  height: number;
  color: 'primary' | 'secundary';
}

export const StyledButton = styled.button<Props>`
  display: block;
  margin: auto;
  background-color: ${(p) => p.theme.colors.background};
  padding: ${(p) => p.height}px 40px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.text_default_color};
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  border-radius: 50px;
  margin-bottom: 10px;
  border: 1px solid ${(p) => p.theme.colors.outline};
`;
