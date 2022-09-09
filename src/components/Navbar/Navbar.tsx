import {
  GitHubIcon,
  GitHubRedirection,
  NavbarItems,
  NavbarStyle,
  RightSide,
} from "./Navbar.style";
import { SunIcon } from "@heroicons/react/24/solid";
import github_icon_black from "../../assets/img/github/GitHub-Mark-120px-plus-dark.png";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const NavBar = () => {
  const divStyle = {
    height: "28px",
    cursor: "pointer",
    color: "orange",
  };
  return (
    <NavbarStyle>
      <NavbarItems>
        <div>hello</div>
        <RightSide>
          <GitHubRedirection href="https://github.com/nellfs">
            <GitHubIcon src={github_icon_black} />
          </GitHubRedirection>
        </RightSide>
      </NavbarItems>
    </NavbarStyle>
  );
};

export default NavBar;
