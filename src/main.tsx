// Ensure window.fetch has both a getter and a setter in sandboxed iframe environments
try {
  const win = typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : null);
  if (win) {
    let currentFetch = typeof win.fetch === 'function' ? win.fetch.bind(win) : win.fetch;
    const desc = Object.getOwnPropertyDescriptor(win, 'fetch');
    if (!desc || (!desc.writable && !desc.set) || desc.configurable) {
      Object.defineProperty(win, 'fetch', {
        get: () => currentFetch,
        set: (fn) => {
          currentFetch = fn;
        },
        configurable: true,
        enumerable: true,
      });
    }
  }
} catch {
  // Ignore fallback errors
}

// Silence third-party browser extension errors (like MetaMask in sandboxed iframes)
try {
  const isExtensionError = (msg: unknown) => {
    if (!msg) return false;
    let text = '';
    if (typeof msg === 'string') {
      text = msg;
    } else if (msg instanceof Error || (typeof msg === 'object' && 'message' in msg)) {
      text = String((msg as { message: unknown }).message || '');
    }
    return /metamask|ethereum|web3|solana|phantom/i.test(text);
  };

  window.addEventListener(
    'error',
    (e) => {
      if (isExtensionError(e.message) || isExtensionError(e.error)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    },
    true,
  );

  window.addEventListener(
    'unhandledrejection',
    (e) => {
      if (isExtensionError(e.reason)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    },
    true,
  );
} catch {
  // Ignore fallback errors
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
} else {
  console.error('Fatal: Root element #root was not found in the document.');
}

