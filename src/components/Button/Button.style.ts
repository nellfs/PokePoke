import styled from 'styled-components';

interface Props {
  height: number;
  color: string;
}

export const StyledButton = styled.button<Props>`
  display: block;
  margin: 0 auto;
  background-color: ${(p) => p.color};
  padding: ${(p) => p.height}px 40px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  border-radius: 50px;
  margin-bottom: 10px;
`;
