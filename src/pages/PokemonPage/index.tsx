import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PokeClient } from '../../services';
import {
  IPokemonDetails,
  IPokemonEvolutionChain,
} from '../../types/Pokemons/types';
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
  const [evolutionChain, setEvolutionChain] =
    useState<IPokemonEvolutionChain>();

  const pokeClient = new PokeClient();

  useEffect(() => {
    return () => {
      if (pokemonId) {
        fetch(pokeClient.getPokemonUrl(pokemonId))
          .then((response) => response.json())
          .then((data) => {
            setPokemon(data);
            pokeClient.getPokemonEvolutionChain(pokemonId).then((response) => {
              if (response.data) {
                const chain: IPokemonEvolutionChain = response.data;
                setEvolutionChain(chain);
              }
            });
          });
      }
    };
  }, []);

  const finalEvolutionChain = () => {
    const firstForm = evolutionChain?.chain.species.name;
    const secondForm = evolutionChain?.chain?.evolves_to[0]?.species?.name;
    const thirdForm =
      evolutionChain?.chain?.evolves_to[0]?.evolves_to[0]?.species.name;

    return (
      <div style={{ background: 'white' }}>
        <div>{firstForm}</div>
        <div>{secondForm}</div>
        <div>{thirdForm}</div>
      </div>
    );
  };

  return (
    <Background>
      <Card>
        {pokemon ? (
          <InfoCard>
            <div>weight {pokemon.weight / 10} kg</div>
            <div>height {pokemon.height / 10} m</div>
            <div>{pokemon.types[0].type.name}</div>
            <div>{pokemon.types[1]?.type.name}</div>
            {finalEvolutionChain()}
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
