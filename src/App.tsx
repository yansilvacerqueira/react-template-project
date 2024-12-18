import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@/app/contexts/ThemeProvider"
import { Router } from "@/app/router/Router"

export const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}