import styled from 'styled-components';

export const Background = styled.div`
  top: 0;
  z-index: 0;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.navbar_color};
  overflow-y: hidden;
  width: 100%;
  height: 100vh;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  width: 80%;
  height: 50px;
  display: flex;
  margin: auto;
`;

export const Text = styled.h1`
  font-weight: 300;

  color: ${(props) => props.theme.colors.text_default_color};
  display: flex;
  margin: auto;
  font-size: 30px;
  text-align: center;
`;
