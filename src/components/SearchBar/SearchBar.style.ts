import styled from 'styled-components';

export const SearchBarStyle = styled.input`
  display: flex;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(p) => p.theme.colors.navbar_color};
  border: 1px solid ${(p) => p.theme.colors.outline};
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  overflow: hidden;
  padding: 8px;
  border-radius: 30px;
`;
