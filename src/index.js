import React from 'react';
import { createRoot } from 'react-dom/client';

import { App, ContextProvider, ErrorBoundary } from './app';

const root = createRoot(document.getElementById('root'));

root.render(
  <ErrorBoundary>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ErrorBoundary>,
);
