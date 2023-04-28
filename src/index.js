import React from 'react';
import { createRoot } from 'react-dom/client';

import { App, ErrorBoundary } from './app';

const root = createRoot(document.getElementById('root'));

root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
