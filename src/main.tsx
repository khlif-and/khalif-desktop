
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'

// Force reset to splash screen on app reload
// Force reset to splash screen on app reload - REMOVED to allow multi-window routing
// window.location.hash = '/';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
