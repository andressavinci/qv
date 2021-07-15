import { createGlobalStyle } from 'styled-components';
import theme from '../Themes';

const { main } = theme;
const fontFamily = `${main.fonts.family}, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
  Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

const GlobalStyle = createGlobalStyle`

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }

  html,
  body {
    font-family: ${fontFamily};
    line-height: ${main.fonts.lineHeight};
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  b, strong {
    font-weight: 600;
  }
`;

export default GlobalStyle;
