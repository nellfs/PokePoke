import { useEffect, useState } from "react";

import api from "../../services";
import { IPokemon } from "../Pokemons/types";
import Card from "../Cards/Card";

import { LoadButton } from "../Load/Load.style";
import { PokemonSection, PokemonList } from "./List.style";

const List = () => {
  const [allPokemons, setAllPokemons] = useState<IPokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(api);

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
        setIsLoading(true);
      });
      Promise.all(pokemonPromises).then((pokemons: IPokemon[]) => {
        setAllPokemons((oldPokemons) => {
          return [...oldPokemons, ...pokemons];
        });
        setIsLoading(false);
      });
    }

    createPokemonObject(data.results);
  };
  useEffect(() => {
    const target = document?.querySelector("#observer");

    if (target != null) {
      const intersectionObserver = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting) && !isLoading)
          getAllPokemons();
      });

      intersectionObserver.observe(target);

      return () => intersectionObserver.disconnect();
    }
  });

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
          <li id="observer"></li>
        </PokemonList>
      </PokemonSection>
    </>
  );
};

export default List;
