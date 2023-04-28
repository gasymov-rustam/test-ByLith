import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { StoreProvider } from '../../src/providers';

const AllTheProviders = ({ children }) => <StoreProvider>{children}</StoreProvider>;

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
