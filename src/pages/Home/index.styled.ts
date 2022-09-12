import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  z-index: 0;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  overflow-y: hidden;
  width: 100%;
  height: 100vh;
`;
