import "styled-components";

import theme from "./themes/light";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
    };
  }
}
