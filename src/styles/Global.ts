import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;

body{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    transition: all 0.2s ease;
    background-color: ${(props) => props.theme.colors.background};
}

::-webkit-scrollbar {
  width: 8px;
  background-color: ${(p) => p.theme.colors.primary};
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.5);
}
}


`;

export default GlobalStyle;
