import {
  // GitHubIcon,
  GitHubRedirection,
  NavbarItems,
  NavBarSpace,
  NavbarStyle,
  RightSide,
} from './Navbar.style';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { useInView } from 'react-intersection-observer';

const NavBar = () => {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <>
      <NavBarSpace ref={ref}></NavBarSpace>
      <NavbarStyle visible={inView}>
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
