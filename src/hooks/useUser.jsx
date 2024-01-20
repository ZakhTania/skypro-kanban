import { useContext } from "react";
import { UserContext } from "../components/contexts/UserContext";

export default function useUser() {
    return useContext(UserContext);
}