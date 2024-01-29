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
import EditCardPage from "./pages/EditCardPage/EditCardPage";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={AppRoutes.HOME} element={<MainPage />}>
          <Route path={AppRoutes.ADD_CARD} element={<AddCardPage />} />
          <Route path={AppRoutes.EXIT} element={<Exit />} />
          <Route path={AppRoutes.CARD} element={<CardPage />} />
          <Route path={AppRoutes.EDIT_CARD} element={<EditCardPage />} />
        </Route>
      </Route>

      <Route path={AppRoutes.SIGNIN} element={<SignIn />} />
      <Route path={AppRoutes.SIGNUP} element={<SignUp />} />
      <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
export default App;
