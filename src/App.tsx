import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import theme from "./styles/theme";
import GlobalStyle from "./styles/Global";
import PokemonsList from "./pages/PokemonsList";
import Home from "./pages/Home";
import TopBar from "./components/Topbar/Topbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TopBar></TopBar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<PokemonsList />} />
          <Route path="/:pokemonId" element={<div>hello</div>}></Route>
          {/* <Route path="*" element={<Navigate to="/"></Navigate>} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
