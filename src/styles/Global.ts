import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    /* width */
::-webkit-scrollbar {
  width: 8px;
}


/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}
}

body{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
}
`;

export default GlobalStyle;
