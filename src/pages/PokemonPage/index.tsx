import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PokeClient } from '../../services';
import { IPokemon } from '../../types/Pokemons/types';
import { Text } from './index.style';

const PokemonPage = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState<IPokemon>();

  const pokeClient = new PokeClient();

  useEffect(() => {
    return () => {
      pokeClient.getPokemon('pikachu');
    };
  }, []);

  if (pokemonId) {
    fetch(pokeClient.getPokemonUrl(pokemonId))
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }

  return (
    <Text>
      <h1>{pokemon?.name}</h1>
      {/* <h2>weight {(pokemon.weight / 4.536).toFixed(1)}</h2> */}
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
      ></img>
    </Text>
  );
};

export default PokemonPage;
