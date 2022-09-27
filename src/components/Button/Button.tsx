import { ReactNode } from 'react';
import { StyledButton } from './Button.style';

interface IButton {
  children: ReactNode;
  height: number;
  visible: boolean;
  onClick?: () => void;
}

const Button = ({ children, height, visible, onClick }: IButton) => {
  if (!visible) return <div></div>;
  return (
    <StyledButton height={height} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
