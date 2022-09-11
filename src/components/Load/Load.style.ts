import styled from 'styled-components';

export const LoadButtonStyle = styled.button`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.blue};
  padding: 8px 60px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  border-radius: 50px;
  margin-bottom: 10px;
`;
