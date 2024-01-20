import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import { cardList } from "../../data";

export const TasksContext = createContext(null);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  function updateTasks({ data }) {
    setTasks(data.tasks);
    navigate(AppRoutes.HOME);
    return tasks;
  }

  return (
    <TasksContext.Provider
      value={{ tasks, isLoading, setIsLoading, updateTasks }}
    >
      {children}
    </TasksContext.Provider>
  );
}