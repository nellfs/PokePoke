import "styled-components";
import theme from "./themes/light"; //Using the default theme

declare module "styled-components" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
