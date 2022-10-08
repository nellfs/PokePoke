import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PokeClient } from '../../services';
import { IPokemon, IPokemonDetails } from '../../types/Pokemons/types';
import {
  Background,
  Card,
  InfoCard,
  PokemonImage,
  PokemonImageCard,
  PokemonName,
} from './index.style';

const PokemonPage = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState<IPokemonDetails>();

  const pokeClient = new PokeClient();

  useEffect(() => {
    return () => {
      pokeClient.getPokemonSpecies('pikachu');
    };
  }, []);

  if (pokemonId) {
    fetch(pokeClient.getPokemonUrl(pokemonId))
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }

  return (
    <Background>
      <Card>
        {pokemon ? (
          <InfoCard>
            <div>weight {pokemon.weight / 10} kg</div>
            <div>height {pokemon.height / 10} m</div>
          </InfoCard>
        ) : (
          <div></div>
        )}

        <PokemonImageCard color_type={'grass'}>
          <PokemonImage
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
          ></PokemonImage>
        </PokemonImageCard>
        <PokemonName>
          <h1>{pokemon?.name}</h1>
          <h2>#{pokemon?.id}</h2>
        </PokemonName>
      </Card>
    </Background>
  );
};

export default PokemonPage;
