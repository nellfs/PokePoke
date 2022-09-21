import { useParams } from 'react-router-dom';

const PokemonPage = () => {
  const { pokemonId } = useParams();
  console.log(pokemonId);

  return (
    <div>
      <h1>{pokemonId}</h1>
    </div>
  );
};

export default PokemonPage;
