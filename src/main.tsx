import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Ajuste o caminho conforme necessário

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

