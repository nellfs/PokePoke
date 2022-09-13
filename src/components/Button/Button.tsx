import { StyledButton } from './Button.style';

interface IButton {
  text: string;
}

const Button = (props: IButton) => {
  return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
