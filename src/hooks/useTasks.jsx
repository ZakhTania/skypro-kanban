import { useContext } from "react";
import { TasksContext } from "../components/contexts/TasksContext";

export default function useTasks() {
  return useContext(TasksContext);
}
