import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { WordContextProvider } from './context/WordContext';
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <WordContextProvider>
        <App />
      </WordContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
