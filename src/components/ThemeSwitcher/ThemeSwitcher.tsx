import { useContext } from 'react';
import { CustomThemeContext } from '../../context/CustomThemeProvider';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(CustomThemeContext);

  return (
    <div
      onClick={() => {
        toggleTheme();
      }}
    >
      change color
    </div>
  );
};

export default ThemeSwitcher;
