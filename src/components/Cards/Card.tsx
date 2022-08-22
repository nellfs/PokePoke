import theme from "../../styles/theme";

import { IPokemon } from "../Pokemons/types";
import pokeballBackground from "../../assets/img/pokeballcard_bg.png";
import {
  LeftSide,
  PokeballImage,
  PokemonCard,
  PokemonContent,
  PokemonImage,
  PokemonName,
  PokemonType,
  PokemonTypeList,
  RightSide,
} from "./Card.style";

const Card = (pokemon: IPokemon) => {
  const renderTypes = pokemon.types.map((n, i) => {
    if (pokemon.types[i] != undefined)
      return <PokemonType key={n}>{pokemon.types[i]}</PokemonType>;
  });

  return (
    <PokemonCard color_type={pokemon.types[0]}>
      <PokemonName>{pokemon.name}</PokemonName>
      <PokemonContent>
        <LeftSide>
          <PokemonTypeList>{renderTypes}</PokemonTypeList>
        </LeftSide>

        <RightSide>
          <PokeballImage src={pokeballBackground}></PokeballImage>
          <PokemonImage
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          ></PokemonImage>
        </RightSide>
      </PokemonContent>
    </PokemonCard>
  );
};

export default Card;
