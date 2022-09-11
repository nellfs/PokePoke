import styled from 'styled-components';

export const NavbarStyle = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  color: white;
  margin-right: auto;
  margin-left: auto;
  overflow: none;
  height: 40px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  position: relative;
  background-color: ${(props) => props.theme.colors.navbar_color};
`;

export const NavbarItems = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  padding: 10px;
`;

export const RightSide = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`;

export const GitHubRedirection = styled.a`
  display: flex;
`;

export const GitHubIcon = styled.img`
  background-color: white;
  height: 22px;
  padding: 2px;
  border-radius: 100px;
`;
