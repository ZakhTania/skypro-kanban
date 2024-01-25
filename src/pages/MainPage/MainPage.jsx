import { useEffect, useState } from "react";
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
  const { tasks, setIsLoading, updateTasks } = useTasks();
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getTasks({ user })
      .then((data) => {
        updateTasks({ data });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user]);


  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Outlet toggleDropdown={toggleDropdown} />
        <Header isOpen={isOpen} toggleDropdown={toggleDropdown} />
        {error ? (
          <Loading>{error}</Loading>
        ) : !tasks ? (
          <Loading>Данные загружаются...</Loading>
        ) : (
          <Main />
        )}
      </Wrapper>
    </>
  );
}
