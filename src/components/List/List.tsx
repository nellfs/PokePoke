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
            types={["grass", "poison"]}
            image={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            }
          ></Card>
          <Card
            id={1}
            name={"Ivysaur"}
            types={["grass", "poison"]}
            image={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
            }
          ></Card>
          <Card
            id={2}
            name={"Venusaur"}
            types={["grass", "poison"]}
            image={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
            }
          ></Card>
          <Card
            id={4}
            name={"Charmander"}
            types={["fire"]}
            image={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
            }
          ></Card>
          <Card
            id={5}
            name={"Charmeleon"}
            types={["fire"]}
            image={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
            }
          ></Card>
          <Card
            id={6}
            name={"Charizard"}
            types={["fire", "fly"]}
            image={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
            }
          ></Card>
          <Card
            id={7}
            name={"Squirtle"}
            types={["water"]}
            image={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
            }
          ></Card>
          <Card
            id={8}
            name={"Wartortle"}
            types={["water"]}
            image={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
            }
          ></Card>
          <Card
            id={9}
            name={"Blastoise"}
            types={["water"]}
            image={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
            }
          ></Card>
        </PokemonList>
      </PokemonSection>
      <button onClick={getAllPokemons}>list</button>
    </>
  );
};

export default List;
