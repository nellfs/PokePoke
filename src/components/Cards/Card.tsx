import { StyledCard } from "../styles/Card.style";

interface ICard {
  name: string;
  color: string;
  image: string;
}

const Card = (cardProps: ICard) => {
  return (
    <div>
      <StyledCard>card</StyledCard>
    </div>
  );
};

export default Card;
