import { useEffect } from "react";
import { GlobalStyle, Loading } from "../../Global.styled";
import Wrapper from "../../components/Wrapper/Wrapper.styled";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import "../../App.css";
import { Outlet } from "react-router-dom";
import useUser from "../../hooks/useUser";
import useTasks from "../../hooks/useTasks";
import { getTasks } from "../../API";

export default function MainPage() {
  const { user } = useUser();
  const {  isLoading, setIsLoading, updateTasks } = useTasks();

  useEffect(() => {
    try {
      setIsLoading(true);
      getTasks({ user }).then((data) => {
        updateTasks({ data });
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Outlet />
        <Header />
        {isLoading ? <Loading>Данные загружаются...</Loading> : <Main />}
      </Wrapper>
    </>
  );
}
