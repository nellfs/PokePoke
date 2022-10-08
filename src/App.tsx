import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/Global';
import PokemonsList from './pages/PokemonsList';
import PokemonPage from './pages/PokemonPage';
import Home from './pages/Home';
import { CustomThemeProvider } from './context/CustomThemeProvider';
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pokemon" element={<PokemonsList />}></Route>
          <Route path="pokemon/:pokemonId" element={<PokemonPage />} />
          {/* <Route path="*" element={<Navigate to="/"></Navigate>} /> */}
        </Routes>
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
