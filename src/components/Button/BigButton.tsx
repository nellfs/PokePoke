import { ReactNode } from 'react';
import { StyledBigButton, Text } from './BigButton.style';
// import pokeballImage from '../../assets/img/pokeballcard_bg.png';

interface IBigButton {
  children: ReactNode;
  height: number;
  color: keyof typeof import('../../styles/solid_colors')['default']['colors'];
  textColor: string;
  visible: boolean;
  onClick?: () => void;
}

const BigButton = ({
  children,
  height,
  color,
  textColor,
  visible,
  onClick,
}: IBigButton) => {
  if (!visible) return <div></div>;
  return (
    <StyledBigButton height={height} color={color} onClick={onClick}>
      {/* <img src={pokeballImage} height={'100px'}></img> */}
      <Text text_color={textColor}>{children}</Text>
    </StyledBigButton>
  );
};

export default BigButton;
