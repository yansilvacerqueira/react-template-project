import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@/app/contexts/ThemeProvider"
import { Router } from "@/app/router/Router"

import '@/lib/dyamicImportErrorListener'
import { ErrorBoundary } from "./ui/components/ErrorBoundary"

export const App = () => {
  return (
    <ErrorBoundary fallback={<>Error...</ >}>
      <ThemeProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  )
}