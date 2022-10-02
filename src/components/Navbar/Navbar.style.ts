import styled from 'styled-components';

interface NavBarProps {
  visible: boolean;
}

export const NavBarSpace = styled.div`
  height: 40px;
`;

export const NavbarStyle = styled.div<NavBarProps>`
  top: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  color: white;
  opacity: ${(p) => (p.visible ? '100%' : '0')};
  transition: all 0.3s;
  margin-right: auto;
  margin-left: auto;
  overflow: none;
  height: 40px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  position: fixed;
`;

export const NavbarItems = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
`;

export const RightSide = styled.div`
  display: inline-flex;
  /* gap: 8px; */
  align-items: center;
`;

export const GitHubRedirection = styled.a`
  display: flex;
`;

export const GitHubIcon = styled.img`
  background-color: white;
  height: 28px;
  padding: 1px;
  border-radius: 100px;
`;
