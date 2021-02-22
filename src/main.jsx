import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './components/App'
import { ThemeProvider } from "./components/dark-mode/theme-context"
import Toggle from './components/dark-mode/toogle/toogle';

ReactDOM.render(
  <React.StrictMode>
     <ThemeProvider>
     <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
            <Toggle />
          </div>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
