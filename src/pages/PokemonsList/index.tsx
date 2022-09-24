import List from '../../components/List/List';
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';

const PokemonsList = () => {
  return (
    <>
      <Navbar />
      <SearchBar></SearchBar>
      <List></List>
    </>
  );
};

export default PokemonsList;
