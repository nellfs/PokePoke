import styled from 'styled-components';
import solid_colors from '../../styles/solid_colors';

export const Background = styled.div`
  position: absolute;
  top: 0;

  background: linear-gradient(
    0deg,
    rgba(64, 76, 218, 1) 0%,
    rgba(83, 91, 221, 1) 100%
  );

  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Card = styled.div`
  font-family: 'Montserrat';
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  border-radius: 20px;
  display: flex;
  margin: auto;
  text-align: center;
`;

export const ButtonPack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 320px) {
    gap: 0px;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  color: ${solid_colors.colors.white};
  display: flex;
  font-size: calc(32px + 2vw);
  text-align: center;
`;

export const Text = styled.h2`
  font-size: 16px;
  color: ${solid_colors.colors.white};
  font-weight: 500;
  margin-bottom: 10px;
`;
