import { StyledButton } from './Button.style';

interface IButton {
  text: string;
}

const Button = (props: IButton) => {
  return (
    <StyledButton height={40} color={'blue'}>
      {props.text}
    </StyledButton>
  );
};

export default Button;
