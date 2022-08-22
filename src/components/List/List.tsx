import { useEffect, useState } from "react";
import api from "../../services";
import fetchPokemon from "../../services";
import Card from "../Cards/Card";
import { PokemonCard } from "../Cards/Card.style";
import { IPokemon, PokemonTypes } from "../Pokemons/types";
import { PokemonSection, PokemonList } from "./List.style";

const List = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(api);

  const getAllPokemons = async () => {
    const res = await fetch(api);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(result: []) {
      result.forEach(async function (pokemon: IPokemon) {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((oldArray) => [...oldArray, data]);
      });
    }
    createPokemonObject(data.results);
    console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <PokemonSection>
      <PokemonList>
        {allPokemons.map((pokemon: IPokemon) => (
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
