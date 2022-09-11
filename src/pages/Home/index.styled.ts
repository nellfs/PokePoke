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

export const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
  margin: 0 auto;
  position: relative;
  background: linear-gradient(
    0deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secundary} 100%
  );

  display: flex;
  align-items: center;
  border-radius: 8px;
  width: 80%;
  height: 70vh;
`;

export const TextCard = styled.div`
  margin: 80px;
  line-height: 110%;
  width: 50%;
  font-weight: 500;
  font-size: 30px;
  color: white;
`;
