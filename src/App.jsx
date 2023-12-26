import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./lib/appRoutes";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MainPage from "./pages/MainPage/MainPage";
import SignIn from "./pages/SignInPage/SignInPage";
import SignUp from "./pages/SignUpPage/SignUpPage";
import Exit from "./pages/ExitPage/ExitPage";
import CardPage from "./pages/CardPage/CardPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(true);
  function exitAuth() {
    setIsAuth(false);
  }
  function getInAuth() {
    setIsAuth(true);
  }
  return (
    <Routes>
      <Route
        path={AppRoutes.HOME}
        element={
          <PrivateRoute isAuth={isAuth}>
            <MainPage />
          </PrivateRoute>
        }
      ></Route>

      <Route
        path={AppRoutes.EXIT}
        element={
          <PrivateRoute isAuth={isAuth}>
            <Exit exitAuth={exitAuth}/>
          </PrivateRoute>
        }
      
      ></Route>

      <Route
        path={AppRoutes.CARD}
        element={
          <PrivateRoute isAuth={isAuth}>
            <CardPage />
          </PrivateRoute>
        }
      ></Route>

      <Route path={AppRoutes.SIGNIN} element={<SignIn getInAuth={getInAuth}/>}></Route>

      <Route path={AppRoutes.SIGNUP} element={<SignUp getInAuth={getInAuth}/>}></Route>

      <Route path={AppRoutes.NOT_FOUND} element={<NotFound />}></Route>
    </Routes>
  );
}
export default App;
