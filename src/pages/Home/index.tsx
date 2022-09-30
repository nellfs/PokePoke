import { Link } from 'react-router-dom';
import BigButton from '../../components/Button/BigButton';
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
            opacity: '.3',
          }}
        ></div>
        <ButtonPack>
          <Link to={'/pokemons'} style={noTextDecoration}>
            <BigButton
              height={42}
              color={'white'}
              textColor={'#4852db'}
              visible={true}
            >
              See Pokémons
            </BigButton>
          </Link>

          <a href="https://github.com/nellfs/pokewhat" style={noTextDecoration}>
            <BigButton
              height={42}
              color={'dark'}
              textColor={'#ffff'}
              visible={true}
            >
              Source Code
            </BigButton>
          </a>
        </ButtonPack>
      </Card>
    </Background>
  );
};

export default Home;
