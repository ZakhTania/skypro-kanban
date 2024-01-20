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
import { AddCardPage } from "./pages/AddCardPage/AddCardPage";
// import { useState } from "react";

function App() {
  // let navigate = useNavigate();

  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  // function exitAuth() {
  //   localStorage.removeItem("user");
  //   setUser(null);
  //   navigate(AppRoutes.SIGNIN);
  // }

  // async function setAuth(loginData, apiAuthFnc) {
  //   try {
  //     await apiAuthFnc(loginData).then((data) => {
  //       localStorage.setItem("user", JSON.stringify(data.user));
  //       setUser(JSON.parse(localStorage.getItem("user")));
  //       navigate(AppRoutes.HOME);
  //     });
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={AppRoutes.HOME} element={<MainPage />}>
          <Route path={AppRoutes.ADD_CARD} element={<AddCardPage />} />
          <Route path={AppRoutes.EXIT} element={<Exit />} />
          <Route path={AppRoutes.CARD} element={<CardPage />} />
        </Route>
      </Route>

      <Route path={AppRoutes.SIGNIN} element={<SignIn />} />
      <Route path={AppRoutes.SIGNUP} element={<SignUp  />} />
      <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
export default App;
