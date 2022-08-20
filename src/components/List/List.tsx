import { useEffect, useState } from "react";
import fetchPokemon from "../../services";
import Card from "../Cards/Card";
import { IPokemon } from "../Pokemons/types";
import { PokemonSection, PokemonList } from "./List.style";

const List = () => {
  const [testPokemon, setPokemon] = useState<IPokemon>({
    id: Math.floor(Math.random() * 900) + 1,
    name: "pokemon",
    types: ["grass", "water"],
    image: "null",
  });

  const [pokedata, setPokedata] = useState([]);

  const [allPokemos, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getPokemon = async (id: number) => {
    console.clear();
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) =>
        setPokemon({
          ...data,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          types: [data.types[0].type.name, data.types[1]?.type.name],
        })
      );
  };

  console.log("types=", testPokemon.types[0], "\n", "data=", testPokemon.types);

  return (
    <>
      <PokemonSection>
        <PokemonList>
          <Card
            id={testPokemon.id}
            name={testPokemon.name}
            types={testPokemon.types}
            image={testPokemon.image}
          />
        </PokemonList>
      </PokemonSection>

      <button onClick={() => getPokemon(Math.floor(Math.random() * 900) + 1)}>
        gerar novo
      </button>
    </>
  );
};

export default List;
