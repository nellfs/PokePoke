import Button from '../../components/Button/Button';
import { Background, Text, Card } from './index.styled';

const Home = () => {
  return (
    <Background>
      <Card>
        <Text>Project made for study purposes</Text>
        <Button text="Source Code"></Button>
      </Card>
    </Background>
  );
};

export default Home;
