import styled from 'styled-components';

interface Props {
  height: number;
  color: string;
}

export const StyledButton = styled.button<Props>`
  display: inline-block;
  height: ${(p) => p.height}px;
  margin: auto;
  background-color: ${(p) => p.color};
  font-size: 16px;
  padding: 6px;
  font-family: 'Poppins';
  border-radius: 10px;
  border-style: none;
  color: white;
  cursor: pointer;
  text-align: center;
  list-style: none;
  box-sizing: border-box;
`;
