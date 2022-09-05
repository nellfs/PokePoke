import { useState } from "react";
import { InView } from "react-intersection-observer";

import api from "../../services";
import { IPokemon } from "../Pokemons/types";
import Card from "../Cards/Card";
import { PokemonSection, PokemonList } from "./List.style";
import LoadButton from "../Load/Load";

const List = () => {
  const [allPokemons, setAllPokemons] = useState<IPokemon[]>([]);
  const [loadMore, setLoadMore] = useState(api.api_value);
  const [onMax, setOnMax] = useState(false);

  const [loadAll, setLoadAll] = useState(false);

  const [next_offset, setNextOffset] = useState(api.api_limit);
  const [next_limit, setNextLimit] = useState(api.api_limit);

  const getAllPokemons = async () => {
    const pokemonPromises: Promise<IPokemon>[] = [];
    const getPokemonUrl = (pokemon_name: string) =>
      `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`;

    const res = await fetch(loadMore);
    const data = await res.json();

    setNextOffset((oldOffset) => oldOffset + next_limit);
    setLoadMore(
      `https://pokeapi.co/api/v2/pokemon?offset=${next_offset}&limit=${next_limit}`
    );

    function createPokemonObject(result: []) {
      if (allPokemons.length >= api.api_maxvalue) {
        setOnMax(true);
        return;
      }
      result.map(async function (pokemon: IPokemon) {
        pokemonPromises.push(
          fetch(getPokemonUrl(pokemon.name)).then((response) => response.json())
        );
      });
      Promise.all(pokemonPromises).then((pokemons: IPokemon[]) => {
        setAllPokemons((oldPokemons) => {
          return [
            ...oldPokemons,
            ...pokemons.filter((pokemon) => pokemon.id <= api.api_maxvalue),
          ];
        });
      });
    }

    createPokemonObject(data.results);
  };

  return (
    <>
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
    </>
  );
};

export default List;
