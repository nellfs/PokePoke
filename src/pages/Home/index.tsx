import { Link } from 'react-router-dom';
import BigButton from '../../components/Button/BigButton';
import Button from '../../components/Button/Button';
import { Background, Text, Card, ButtonPack, Title } from './index.styled';

const Home = () => {
  const noTextDecoration = {
    textDecoration: 'none',
  };
  return (
    <Background>
      <Card>
        <Title>POKEWHAT</Title>
        <Text>A project made for study purposes</Text>
        <div
          style={{
            background: 'white',
            height: '1px',
            width: '120px',
            marginBottom: '20px',
          }}
        ></div>
        <ButtonPack>
          <BigButton
            height={42}
            color={'white'}
            textColor={'#198bd7'}
            visible={true}
          >
            See Pokémons
          </BigButton>
          <BigButton
            height={42}
            color={'dark'}
            textColor={'#ffff'}
            visible={true}
          >
            Source Code
          </BigButton>
        </ButtonPack>
        {/* <ButtonPack>
          <Link to={'/pokemons'} style={noTextDecoration}>
            <Button height={8} visible={true}>
              p
            </Button>
          </Link>
          <Link to={'/berries'} style={noTextDecoration}>
            <Button height={8} visible={true}>
              b
            </Button>
          </Link>
          <a href="https://github.com/nellfs/pokewhat" style={noTextDecoration}>
            <Button height={8} visible={true}>
              s-c
            </Button>
          </a>
        </ButtonPack> */}
      </Card>
    </Background>
  );
};

export default Home;
