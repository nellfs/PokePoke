import { ReactNode } from 'react';
import { StyledButton } from './Button.style';

interface IButton {
  children: ReactNode;
  height: number;
  color: string;
  visible: boolean;
  onClick(): void;
}

const Button = ({ children, height, color, visible, onClick }: IButton) => {
  if (!visible) return <div></div>;
  return (
    <StyledButton height={height} color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
