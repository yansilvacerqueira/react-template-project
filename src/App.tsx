import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@/app/contexts/ThemeProvider"
import { Router } from "@/app/router/Router"

import '@/lib/dyamicImportErrorListener'

export const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}