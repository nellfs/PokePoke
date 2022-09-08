import styled from "styled-components";

export const TopBarStyle = styled.div`
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
