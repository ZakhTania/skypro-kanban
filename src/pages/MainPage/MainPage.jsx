import { useEffect, useState } from "react";
import { cardList } from "../../data";
import { GlobalStyle, Loading } from "../../Global.styled";
import Wrapper from "../../components/Wrapper/Wrapper.styled";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import PopNewCard from "../../components/PopNewCard/PopNewCard";
import "../../App.css";
import { Outlet } from "react-router-dom";
import { getTasks }from "../../API";

export default function MainPage() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);
  // const [loadingTasksError, setLoadingTasksError] = useState(null);

  function addCard() {
    const newCard = {
      _id: cards.length + 1,
      topic: "Research",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }

  useEffect(() => {
    try {
      getTasks().then((data) => {
        setCards(data.tasks);
      });
    } catch (error) {
      alert(error.message)
      // setLoadingTasksError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Outlet />
        <PopNewCard />

        <Header addCard={addCard} />
        {isLoading ? (
          <Loading>Данные загружаются...</Loading>
        ) : (
          <Main cards={cards} /> 
        )}
 
      </Wrapper>
    </>
  );
}
