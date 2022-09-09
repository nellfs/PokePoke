import styled from "styled-components";

export const NavbarStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  margin-right: auto;
  margin-left: auto;
  overflow-x: hidden;
  height: 40px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  position: relative;
  background-color: ${(props) => props.theme.colors.red};
`;

export const NavbarItems = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  padding: 10px;
`;
