import { useEffect, useInsertionEffect, useState } from "react";
import { InView, useInView } from "react-intersection-observer";

import api from "../../services";
import { IPokemon } from "../Pokemons/types";
import Card from "../Cards/Card";
import { PokemonSection, PokemonList } from "./List.style";
import LoadButton from "../Load/Load";

const List = () => {
  const [allPokemons, setAllPokemons] = useState<IPokemon[]>([]);
  const [loadMore, setLoadMore] = useState(api);

  const [loadAll, setLoadAll] = useState(false);

  const getAllPokemons = async () => {
    const pokemonPromises: Promise<IPokemon>[] = [];
    const getPokemonUrl = (pokemon_name: string) =>
      `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`;

    const res = await fetch(loadMore);
    const data = await res.json();
    setLoadMore(data.next);

    function createPokemonObject(result: []) {
      result.map(async function (pokemon: IPokemon) {
        pokemonPromises.push(
          fetch(getPokemonUrl(pokemon.name)).then((response) => response.json())
        );
      });
      Promise.all(pokemonPromises).then((pokemons: IPokemon[]) => {
        setAllPokemons((oldPokemons) => {
          return [...oldPokemons, ...pokemons];
        });
      });
    }

    createPokemonObject(data.results);
  };

  useEffect(() => {
    return () => {
      getAllPokemons();
    };
  }, []);

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
        visible={!loadAll && allPokemons.length != 0}
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
          if (inView && loadAll) getAllPokemons();
        }}
      ></InView>
    </>
  );
};

export default List;
