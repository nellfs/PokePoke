import {
  // GitHubIcon,
  GitHubRedirection,
  NavbarItems,
  NavBarSpace,
  NavbarStyle,
  RightSide,
} from './Navbar.style';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const NavBar = () => {
  return (
    <>
      <NavBarSpace />
      <NavbarStyle>
        <NavbarItems>
          {/* <div>hello</div> */}
          <RightSide>
            <ThemeSwitcher></ThemeSwitcher>
            <GitHubRedirection href="https://github.com/nellfs">
              {/* <GitHubIcon src={github_icon_black} /> */}
            </GitHubRedirection>
          </RightSide>
        </NavbarItems>
      </NavbarStyle>
    </>
  );
};

export default NavBar;
