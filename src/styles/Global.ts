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
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(200, 200, 200, 0.3);
}
}


`;

export default GlobalStyle;
