import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Only register service worker in production and if supported
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  // Defer service worker registration until after page load
  window.addEventListener('load', () => {
    // Use setTimeout to delay registration until after critical resources are loaded
    setTimeout(() => {
      navigator.serviceWorker.register('/service-worker.js')
        .catch(() => {
          // Silently fail if service worker registration fails
          // This prevents console errors in environments that don't support service workers
        });
    }, 3000);
  });
}

// Use a function to create the app to allow for code splitting
const renderApp = () => {
  const root = document.getElementById('root');
  if (root) {
    createRoot(root).render(
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    );
  }
};

// Check if the document is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
