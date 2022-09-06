import { StrictMode, useEffect, useState } from "react";
import { InView } from "react-intersection-observer";

import api from "../../services";
import { IPokemon } from "../Pokemons/types";
import Card from "../Cards/Card";
import { PokemonSection, PokemonList } from "./List.style";
import LoadButton from "../Load/Load";

const List = () => {
  const [allPokemons, setAllPokemons] = useState<IPokemon[]>([]);
  const [pokemonChunk, setPokemonChunk] = useState(api.api_value);
  const [onMax, setOnMax] = useState(false);
  const [loadAll, setLoadAll] = useState(false);

  const getAllPokemons = async () => {
    const pokemonPromises: Promise<IPokemon>[] = [];
    const getPokemonUrl = (pokemon_name: string) =>
      `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`;
    const res = await fetch(pokemonChunk);
    const data = await res.json();

    setPokemonChunk(data.next);
    function createPokemonObject(result: []) {
      if (allPokemons.length >= api.api_maxvalue) {
        setOnMax(true);
        return;
      }
      result.map(async function (pokemon: IPokemon) {
        const pokemonPromise = fetch(getPokemonUrl(pokemon.name)).then(
          (response) => response.json()
        );

        pokemonPromises.push(pokemonPromise);
      });
      Promise.all(pokemonPromises).then((pokemons: IPokemon[]) => {
        pokemons.map((pokemon: IPokemon) => {
          if (pokemon.id <= 898) {
            const pokemonObject: IPokemon = {
              id: pokemon.id,
              name: pokemon.name,
              types: [
                {
                  type: {
                    name: pokemon.types[0].type.name,
                  },
                },
                {
                  type: {
                    name: pokemon.types[1]?.type.name,
                  },
                },
              ],
            };

            setAllPokemons((oldPokemons) => {
              return [...oldPokemons, pokemonObject];
            });
          }
        });
      });
    }
    createPokemonObject(data.results);
  };

  return (
    <div>
      <PokemonSection>
        <PokemonList>
          {allPokemons.map((pokemon: IPokemon) => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              types={[
                {
                  type: {
                    name: pokemon.types[0].type.name,
                  },
                },
                {
                  type: {
                    name: pokemon.types[1]?.type.name,
                  },
                },
              ]}
            ></Card>
          ))}
        </PokemonList>
      </PokemonSection>
      <LoadButton
        visible={!loadAll}
        onClick={() => {
          setLoadAll(true);
          getAllPokemons();
        }}
      >
        Load All
      </LoadButton>
      <InView
        as="div"
        onChange={(inView) => {
          if (inView && loadAll && !onMax) {
            getAllPokemons();
          }
        }}
      ></InView>
    </div>
  );
};

export default List;
