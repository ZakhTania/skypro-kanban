import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./contexts/UserContext.jsx";
import { TaskProvider } from "./contexts/TasksContext.jsx";
import Theme from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Theme>
        <UserProvider>
          <TaskProvider>
            <App />
          </TaskProvider>
        </UserProvider>
      </Theme>
    </React.StrictMode>
  </BrowserRouter>
);
