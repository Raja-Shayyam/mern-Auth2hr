import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { Context } from '../contextStore/store.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <App />
    </Context>
  </StrictMode>,
)
