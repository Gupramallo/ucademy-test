import { StrictMode } from 'react'
import './index.css'
import * as ReactDOM from 'react-dom/client'
import App from './app/app'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
