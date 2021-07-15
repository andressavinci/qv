import { css } from 'styled-components/macro';
import theme from '../Themes';

const {
  main: { sizes },
} = theme;

// https://tobbelindstrom.com/blog/how-to-create-a-breakpoint-mixin-with-styled-components/
const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default media;