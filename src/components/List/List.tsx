import { useEffect, useState } from "react";
import api from "../../services";
import fetchPokemon from "../../services";
import Card from "../Cards/Card";
import { PokemonCard, PokemonType } from "../Cards/Card.style";
import { IPokemon, PokemonTypes } from "../Pokemons/types";
import { PokemonSection, PokemonList } from "./List.style";

const List = () => {
  //FIX ANY TYPES

  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(api);

  const getAllPokemons = async () => {
    const getPokemonUrl = (pokemon_name: string) =>
      `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`;

    const res = await fetch(api);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(result: []) {
      const pokemonPromises: any[] = [];

      result.forEach(async function (pokemon: IPokemon) {
        pokemonPromises.push(
          fetch(getPokemonUrl(pokemon.name)).then((response) => response.json())
        );
      });

      Promise.all(pokemonPromises).then((pokemons: any) => {
        setAllPokemons(pokemons);
      });
    }

    function createPokemon() {
      return <div>hello</div>;
    }

    createPokemonObject(data.results);
    // console.log(allPokemons);
  };

  const createPokemon = () => {};

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <PokemonSection>
      <PokemonList>
        {allPokemons.map((pokemon: any) => (
          <Card
            id={pokemon.id}
            name={pokemon.name}
            types={[pokemon.types[0].type.name, pokemon.types[1]?.type.name]}
          ></Card>
        ))}
      </PokemonList>
    </PokemonSection>
  );
};

export default List;
