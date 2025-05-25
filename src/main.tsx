import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"

// 👇 Add basename here
createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/ktcgroup/">
    <App />
  </BrowserRouter>
);
