import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from '@router/routes.tsx'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { theme } from '@theme/theme-config.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </StrictMode>,
)
