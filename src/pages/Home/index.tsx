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
        <Text>Project made for study purposes</Text>
        <ButtonPack>
          <a href="https://github.com/nellfs/pokewhat" style={noTextDecoration}>
            <Button height={8} color={'secundary'} visible={true}>
              Source-Code
            </Button>
          </a>
          <Link to={'/pokemons'} style={noTextDecoration}>
            <Button height={8} color={'secundary'} visible={true}>
              See Pokemons
            </Button>
          </Link>
        </ButtonPack>
      </Card>
    </Background>
  );
};

export default Home;
