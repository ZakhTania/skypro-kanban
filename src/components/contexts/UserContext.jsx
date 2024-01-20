import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  function login(user) {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(JSON.parse(localStorage.getItem("user")));
    navigate(AppRoutes.HOME);
  }

  function logOut() {
    localStorage.removeItem("user");
    setUser(null);
    navigate(AppRoutes.SIGNIN);
  }
  return <UserContext.Provider value={{user, login, logOut}}>{children}</UserContext.Provider>;
}
