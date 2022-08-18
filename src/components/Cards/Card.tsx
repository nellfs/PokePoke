import theme from "../../styles/theme";
import { IPokemon } from "../Pokemons/types";
import {
  PokemonCard,
  PokemonImage,
  PokemonName,
  PokemonType,
  RightSide,
} from "./Card.style";

const Card = (pokemon: IPokemon) => {
  return (
    <>
      <PokemonCard color_type={pokemon.type}>
        <PokemonName>{pokemon.name}</PokemonName>
        <PokemonType>{pokemon.type}</PokemonType>
        <RightSide>
          <PokemonImage src={pokemon.image}></PokemonImage>
        </RightSide>
      </PokemonCard>
    </>
  );
};

export default Card;
