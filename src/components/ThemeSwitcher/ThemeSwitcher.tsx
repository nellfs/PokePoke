import { useContext } from 'react';
import { CustomThemeContext } from '../../context/CustomThemeProvider';
import { SwitchCircle, ThemeSwitcherButton } from './ThemeSwitcher.style';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useContext(CustomThemeContext);

  return (
    <ThemeSwitcherButton
      onClick={() => {
        toggleTheme();
      }}
    >
      <SwitchCircle theme_title={theme.title} />
      <SunIcon style={{ color: 'white', height: '22px' }} />
      <MoonIcon style={{ color: 'black', height: '22px' }} />
    </ThemeSwitcherButton>
  );
};

export default ThemeSwitcher;
