import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"

import { lazy, Suspense } from "react"

const Home = lazy(() => import("@/ui/pages/home/Home"));
const Signin = lazy(() => import("@/ui/pages/signin/Signin"));

export const Router = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route element={<Home />} path={routes.home} />
        <Route element={<Signin />} path={routes.signin} />
      </Routes>
    </Suspense>
  )
}