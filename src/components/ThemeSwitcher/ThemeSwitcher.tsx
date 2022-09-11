import { useContext } from "react";
import { CustomThemeContext } from "../../context/CustomThemeProvider";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(CustomThemeContext);

  return (
    <div
      onClick={() => {
        toggleTheme();
      }}
    >
      {theme.title}
    </div>
  );
};

export default ThemeSwitcher;
