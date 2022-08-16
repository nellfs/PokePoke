import theme from "../../styles/theme";
import { IPokemon } from "../Pokemons/types";
import {
  PokemonCard,
  PokemonImage,
  PokemonInfo,
  PokemonText,
  PokemonTypesCard,
  Test,
} from "./Card.style";

const Card = (props: IPokemon) => {
  return (
    <>
      <PokemonCard color_type={props.type}>
        <PokemonInfo>
          <PokemonText>{props.name}</PokemonText>
          <PokemonTypesCard>0</PokemonTypesCard>
        </PokemonInfo>
        <PokemonImage src={props.image}></PokemonImage>
        <Test>test text</Test>
      </PokemonCard>
      <Test>test text</Test>
    </>
  );
};

export default Card;
