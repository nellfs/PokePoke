import { useEffect, useState } from "react";
import fetchPokemon from "../../services";
import Card from "../Cards/Card";
import { IPokemon } from "../Pokemons/types";
import { PokemonSection, PokemonList } from "./List.style";

const List = () => {
  const [testPokemon, setPokemon] = useState<IPokemon>({
    id: 1,
    name: "pokemon",
    types: ["grass", "water"],
    image: "null",
  });
  const [allPokemos, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getPokemon = async (id: number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon({ ...data }));
  };

  console.log(testPokemon.types[0]);

  return (
    <>
      <PokemonSection>
        <PokemonList>
          <Card
            id={testPokemon.id}
            name={testPokemon.name}
            types={["grass", "water"]}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${testPokemon.id}.png`}
          />
        </PokemonList>
      </PokemonSection>

      <button onClick={() => getPokemon(1)}>bestao</button>
    </>
  );
};

export default List;
