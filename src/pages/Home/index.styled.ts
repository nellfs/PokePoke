import styled from 'styled-components';
import solid_colors from '../../styles/solid_colors';
import pokeballBackground from '../../assets/img/mini_pokeball_bg.png';

export const Background = styled.div`
  position: absolute;
  top: 0;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(79, 133, 244, 1) 24%,
    rgba(0, 90, 255, 1) 100%
  );
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

export const ScrollingImage = styled.div`
  z-index: 1;
  position: absolute;

  background: url(${pokeballBackground}) repeat;
  width: calc(100% + 128px);
  height: 100vh;
  animation: slide 2s linear infinite;
  @keyframes slide {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translate(-64px); /* The image width */
    }
  }
`;

export const Card = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 32rem;
  height: 28rem;
  padding: 16px;
  border-radius: 20px;
  display: flex;
  margin: auto;
`;

export const ButtonPack = styled.div`
  gap: 10px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 481px) {
    gap: 0px;
    flex-direction: column;
  }

  justify-content: center;
`;

export const Text = styled.h1`
  font-weight: 600;
  font-family: 'Roboto';
  color: ${solid_colors.colors.dark};
  display: flex;
  margin: auto;
  font-size: 30px;
  text-align: center;
`;
