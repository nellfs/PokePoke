import styled from 'styled-components';
import solid_colors from '../../styles/solid_colors';

interface ThemeSwitcherProps {
  theme_title: string;
}

export const ThemeSwitcherButton = styled.button`
  background-color: ${solid_colors.colors.black};
  border-radius: 100px;
  border-style: none;
  display: inline-flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  font-size: 14px;
  height: 26px;
  line-height: 20px;
  list-style: none;
  outline: none;
  padding: 1px 2px;
  justify-content: space-between;
  width: 56px;
  user-select: none;
`;

export const SwitchCircle = styled.div<ThemeSwitcherProps>`
  user-select: none;
  position: absolute;
  background: ${solid_colors.colors.white};
  width: 24px;
  height: 24px;
  border-radius: 100px;
  transition: transform 0.2s linear;
  transform: translateX(
    ${({ theme_title }) => (theme_title == 'light' ? 'px' : '28px')}
  );
`;
