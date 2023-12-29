import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
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
  let navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  console.log(isAuth);

  function exitAuth() {
    localStorage.removeItem("token");
    setIsAuth(false);
    navigate(AppRoutes.SIGNIN);
  }
  function setAuth() {
    localStorage.setItem("token", "123456");
    setIsAuth(localStorage.getItem("token"));
    navigate(AppRoutes.HOME);
  }

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={AppRoutes.HOME} element={<MainPage />} />
        <Route path={AppRoutes.EXIT} element={<Exit exitAuth={exitAuth} />} />
        <Route path={AppRoutes.CARD} element={<CardPage />} />
      </Route>

      <Route path={AppRoutes.SIGNIN} element={<SignIn setAuth={setAuth} />} />
      <Route path={AppRoutes.SIGNUP} element={<SignUp setAuth={setAuth} />} />
      <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
export default App;
