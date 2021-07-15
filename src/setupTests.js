import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import Root from './components/Layout/Root';

const WrapperProvider = ({ children }) => (
  <Root>{children}</Root>
);

const customRender = (ui, options) => render(ui, { wrapper: WrapperProvider, ...options });

export * from '@testing-library/react';

export {
  customRender as render,
};
