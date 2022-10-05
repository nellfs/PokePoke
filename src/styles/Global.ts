import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;

body{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    transition: background 0.2s ease;
    background-color: ${(props) => props.theme.colors.background};
}

::-webkit-scrollbar {
  width: 8px;
  background-color: ${(p) => p.theme.colors.background};
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(128, 128, 128, 0.5);
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(128, 128, 128, 0.8);
}
}


`;

export default GlobalStyle;
