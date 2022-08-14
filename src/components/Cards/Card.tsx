import theme from "../../styles/theme";
import { IPokemon } from "../Pokemons/types";
import {
  PokemonCard,
  PokemonImage,
  PokemonInfo,
  PokemonText,
  PokemonTypesCard,
} from "./Card.style";

const Card = (props: IPokemon) => {
  return (
    <PokemonCard color_type={props.type}>
      <PokemonInfo>
        <PokemonText>{props.name}</PokemonText>
        <PokemonTypesCard>{props.type}</PokemonTypesCard>
      </PokemonInfo>
      <PokemonImage src={props.image}></PokemonImage>
    </PokemonCard>
  );
};

export default Card;
