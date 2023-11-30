import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { darkTheme } from './themes'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)
