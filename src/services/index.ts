const fetchPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100000";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.clear();
      console.log(data);
    })
    .catch((e) => {
      console.log("Erro:" + e);
    });
};

export default fetchPokemon;
