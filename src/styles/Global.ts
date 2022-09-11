import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}
}

body{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.background};
}
`;

export default GlobalStyle;
