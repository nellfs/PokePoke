import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;


::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
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
    transition: background-color 0.2s ease;
    background-color: ${(props) => props.theme.colors.background};
}
`;

export default GlobalStyle;
