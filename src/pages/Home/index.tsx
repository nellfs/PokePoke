import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import SelectorCard from '../../components/Selector/SelectorCard';
import {
  Background,
  Text,
  Card,
  ButtonPack,
  ScrollingImage,
} from './index.styled';

const Home = () => {
  const noTextDecoration = {
    textDecoration: 'none',
  };
  return (
    <Background>
      <ScrollingImage></ScrollingImage>
      <Card>
        {/* <Text>A pokémon project made for study purposes</Text> */}
        <ButtonPack>
          <SelectorCard color="fire" img="../../src/assets/img/pokeball.png">
            Pokémons
          </SelectorCard>
          <SelectorCard color="grass" img="../../src/assets/img/cheri.png">
            Berries
          </SelectorCard>
          <SelectorCard
            color="dark"
            img="../../src/assets/img/github/GitHub-Mark-120px-plus-light.png"
          >
            Source-Code
          </SelectorCard>
          {/* <Link to={'/pokemons'} style={noTextDecoration}>
            <Button height={8} color={'red'} visible={true}>
              p
            </Button>
          </Link>
          <Link to={'/berries'} style={noTextDecoration}>
            <Button height={8} color={'green'} visible={true}>
              b
            </Button>
          </Link>
          <a href="https://github.com/nellfs/pokewhat" style={noTextDecoration}>
            <Button height={8} color={'dark'} visible={true}>
              s-c
            </Button>
          </a> */}
        </ButtonPack>
      </Card>
    </Background>
  );
};

export default Home;
