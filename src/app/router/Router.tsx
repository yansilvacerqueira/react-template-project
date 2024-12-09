import { Home } from "@/ui/pages/home/Home"
import { Signin } from "@/ui/pages/signin/Signin"
import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"

export const Router = () => {
  return (
    <Routes>
      <Route element={<Home />} path={routes.home} />
      <Route element={<Signin />} path={routes.signin} />
    </Routes>
  )
}