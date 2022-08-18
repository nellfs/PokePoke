import { useEffect, useState } from "react";
import fetchPokemon from "../../services";
import Card from "../Cards/Card";
import { IPokemon } from "../Pokemons/types";
import { PokemonSection, PokemonList } from "./List.style";

const List = () => {
  const [allPokemos, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    console.log(data.next);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <>
      <PokemonSection>
        <PokemonList>
          <Card
            id={0}
            name={"Bulbasaur"}
            type={"grass"}
            image={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            }
          ></Card>
          <Card
            id={1}
            name={"Charmander"}
            type={"fire"}
            image={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
            }
          ></Card>
          <Card
            id={2}
            name={"Squirtle"}
            type={"water"}
            image={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
            }
          ></Card>
        </PokemonList>
      </PokemonSection>
      <button onClick={getAllPokemons}>list</button>
    </>
  );
};

export default List;
