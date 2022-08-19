import theme from "../../styles/theme";

import { IPokemon } from "../Pokemons/types";
import pokeballBackground from '../../assets/img/pokeballcard_bg.png';
import {
  PokeballImage,
  PokemonCard,
  PokemonImage,
  PokemonName,
  PokemonType,
  PokemonTypeList,
  RightSide,
} from "./Card.style";

const Card = (pokemon: IPokemon) => {
  return (
    <>
      <PokemonCard color_type={pokemon.type}>
        <PokemonName>{pokemon.name}</PokemonName>

        <PokemonTypeList>
        <PokemonType color_type={pokemon.type}>{pokemon.type}</PokemonType> 
        <PokemonType color_type={"poison"}>unknown</PokemonType>
      </PokemonTypeList>

        <RightSide>
        <PokemonImage src={pokemon.image}></PokemonImage>
        <PokeballImage src={pokeballBackground}></PokeballImage>
        </RightSide>
      </PokemonCard>
    </>
  );
};

export default Card;
