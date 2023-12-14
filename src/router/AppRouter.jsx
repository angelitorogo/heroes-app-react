import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>

        <Routes>

            {/* Rutas publicas solo si no estas autenticado*/}
            <Route path="login/*" element={ 
              <PublicRoute>
                <Routes>
                  <Route path="/*" element={<LoginPage />} />
                </Routes>
                {/*<LoginPage />*/}
              </PublicRoute>
            } />

            {/*<Route path="login" element={<LoginPage />} />*/} 

            {/* Rutas privadas solo autenticados*/}
            <Route path="/*" element={ 
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            } />

            {/*<Route path="/*" element={<HeroesRoutes />} />  Rutas sin proteger copn autenticacion de ningun tipo */} 

        </Routes>
    </>
  )
}
