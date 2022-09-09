import { NavbarItems, NavbarStyle } from "./Navbar.style";
import { SunIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const divStyle = {
    height: "20px",
    cursor: "pointer",
  };
  return (
    <NavbarStyle>
      <NavbarItems>
        <div>Poke-What</div>
        <SunIcon
          onClick={() => console.log("hello world")}
          style={divStyle}
        ></SunIcon>
      </NavbarItems>
    </NavbarStyle>
  );
};

export default NavBar;
