import { ThemeContext, ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/Global";
import PokemonsList from "./pages/PokemonsList";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { useContext, useState } from "react";
import {
  CustomThemeContext,
  CustomThemeProvider,
} from "./context/CustomThemeProvider";

function App() {
  const [theme, setTheme] = useState(light);

  const changeTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const themes = () => {
    return useContext(CustomThemeContext).theme;
  };

  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<PokemonsList />} />
          <Route path="/:pokemonId" element={<div>hello</div>}></Route>
          {/* <Route path="*" element={<Navigate to="/"></Navigate>} /> */}
        </Routes>
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
