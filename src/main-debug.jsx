import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Add debug logging
console.log('main.jsx loaded');
console.log('Root element:', document.getElementById('root'));

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  
  console.log('Creating React root...');
  const root = createRoot(rootElement);
  
  console.log('Rendering App...');
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  
  console.log('App rendered successfully');
} catch (error) {
  console.error('Error rendering app:', error);
  // Fallback: show error message
  document.body.innerHTML = `
    <div style="padding: 20px; background: white; color: black;">
      <h1>Error Loading Application</h1>
      <p>Error: ${error.message}</p>
      <pre>${error.stack}</pre>
    </div>
  `;
}
