import { StrictMode } from 'react'
import './index.css'
import * as ReactDOM from 'react-dom/client'
import App from './app/app'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ModalProvider from '@/shared/providers/modal-provider'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </ModalProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
)
