import { ReactNode } from 'react';
import { SelectorCardStyle, SelectorText } from './SelectorCard.style';

interface SelectorProps {
  children: ReactNode;
  color: keyof typeof import('../../styles/type_colors')['default']['pokemon_types'];
  img: string;
}

const SelectorCard = ({ children, color }: SelectorProps) => {
  return (
    <SelectorCardStyle color={color}>
      <SelectorText>{children}</SelectorText>
    </SelectorCardStyle>
  );
};

export default SelectorCard;
