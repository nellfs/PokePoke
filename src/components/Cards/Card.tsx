import theme from "../../styles/theme";
import { IPokemon } from "../Pokemons/types";
import { PokemonCard } from "./Card.style";

const Card = (props: IPokemon) => {
  return (
    <PokemonCard color_type={"grass"}>
      <img src={props.image}></img>
      <h1>{props.name}</h1>
    </PokemonCard>
  );
};

export default Card;
