import { useContext } from 'react';
import { CustomThemeContext } from '../../context/CustomThemeProvider';
import { SwitchCircle, ThemeSwitcherButton } from './ThemeSwitcher.style';

import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';

const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useContext(CustomThemeContext);

  return (
    <ThemeSwitcherButton
      onClick={() => {
        toggleTheme();
      }}
    >
      <SwitchCircle theme_title={theme.title} />
      <MoonIcon style={{ color: 'yellow', height: '22px' }} />
      <SunIcon style={{ color: 'orange', height: '22px' }} />
    </ThemeSwitcherButton>
  );
};

export default ThemeSwitcher;
