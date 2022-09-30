import styled from 'styled-components';
import solid_colors from '../../styles/solid_colors';

export const Background = styled.div`
  position: absolute;
  top: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 120, 204, 1) 16%,
    rgba(109, 203, 255, 1) 100%
  );
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Card = styled.div`
  font-family: 'Montserrat';
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  border-radius: 20px;
  display: flex;
  margin: auto;
`;

export const ButtonPack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Title = styled.h1`
  font-weight: 800;
  color: ${solid_colors.colors.white};
  display: flex;
  font-size: 3rem;
  text-align: center;
`;

export const Text = styled.h2`
  font-size: 16px;
  color: ${solid_colors.colors.white};
  font-weight: 500;
  margin-bottom: 10px;
`;
