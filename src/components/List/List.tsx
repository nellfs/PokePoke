import { useEffect, useState } from "react";

import api from "../../services";
import { IPokemon } from "../Pokemons/types";
import Card from "../Cards/Card";

import { LoadButton } from "../Load/Load.style";
import { PokemonSection, PokemonList } from "./List.style";

const List = () => {
  const [allPokemons, setAllPokemons] = useState<IPokemon[]>([]);
  const [loadMore, setLoadMore] = useState(api);

  const getAllPokemons = async () => {
    const pokemonPromises: Promise<IPokemon>[] = [];
    const getPokemonUrl = (pokemon_name: string) =>
      `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`;

    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(result: []) {
      result.forEach(async function (pokemon: IPokemon) {
        pokemonPromises.push(
          fetch(getPokemonUrl(pokemon.name)).then((response) => response.json())
        );
      });

      Promise.all(pokemonPromises).then((pokemons: IPokemon[]) => {
        setAllPokemons(pokemons);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
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
      <LoadButton onClick={(e) => getAllPokemons()}>Load All</LoadButton>
    </>
  );
};

export default List;
