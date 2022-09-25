import { ReactNode } from 'react';
import {
  SelectorCardStyle,
  SelectorImage,
  SelectorText,
} from './SelectorCard.style';

interface SelectorProps {
  children: ReactNode;
  color: keyof typeof import('../../styles/type_colors')['default']['pokemon_types'];
  img: string;
}

const SelectorCard = ({ children, color, img }: SelectorProps) => {
  return (
    <SelectorCardStyle color={color}>
      <SelectorText>{children}</SelectorText>
      <SelectorImage src={img}></SelectorImage>
    </SelectorCardStyle>
  );
};

export default SelectorCard;
