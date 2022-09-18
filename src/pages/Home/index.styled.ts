import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  top: 0;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.navbar_color};
  overflow-y: hidden;
  width: 100%;
  height: 100vh;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20vh;
  display: flex;
  margin: auto;
`;

export const ButtonPack = styled.div`
  gap: 10px;
  margin: auto;
  display: flex;
  justify-content: center;
`;

export const Text = styled.h1`
  font-weight: 300;
  font-family: 'Roboto';
  color: ${(props) => props.theme.colors.text_default_color};
  display: flex;
  margin: auto;
  font-size: 30px;
  text-align: center;
`;
