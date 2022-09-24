import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { Background, Text, Card, ButtonPack } from './index.styled';

const Home = () => {
  const noTextDecoration = {
    textDecoration: 'none',
  };
  return (
    <Background>
      <Card>
        <Text>A pokémon project made for study purposes</Text>
        <ButtonPack>
          <Link to={'/pokemons'} style={noTextDecoration}>
            <Button height={8} color={'background'} visible={true}>
              Pokémons
            </Button>
          </Link>
          <Link to={'/barries'} style={noTextDecoration}>
            <Button height={8} color={'background'} visible={true}>
              Berries
            </Button>
          </Link>
          <a href="https://github.com/nellfs/pokewhat" style={noTextDecoration}>
            <Button height={8} color={'background'} visible={true}>
              Source-Code
            </Button>
          </a>
        </ButtonPack>
      </Card>
    </Background>
  );
};

export default Home;
