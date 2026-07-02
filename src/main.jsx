import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import ErrorBoundary from './components/ErrorBoundary.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ErrorBoundary fallback=
    {
      <div>
    <h1 className="text-xl font-semibold mb-4">Something went wrong</h1>
    <button onClick={() => window.location.reload()} className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Try again</button>
    </div>
  }>
      <App />
    </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
)
