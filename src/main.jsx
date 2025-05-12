import { StrictMode } from 'react'; //Node nodule
import { createRoot } from 'react-dom/client'; //Node module
import './index.css'; //CSS link
import App from './App.jsx'; //Component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
