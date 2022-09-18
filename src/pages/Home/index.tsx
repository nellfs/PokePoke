import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { Background, Text, Card, ButtonPack } from './index.styled';

const Home = () => {
  return (
    <Background>
      <Card>
        <Text>Project made for study purposes</Text>
        <ButtonPack>
          <Button height={8} color={'primary'} visible={true}>
            Source-Code
          </Button>

          <Link to={'/pokemons'} style={{ textDecoration: 'none' }}>
            <Button height={8} color={'primary'} visible={true}>
              See Pokemons
            </Button>
          </Link>
        </ButtonPack>
      </Card>
    </Background>
  );
};

export default Home;
