import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import PopExit from "./components/PopExit/Exit";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import { cardList } from "./data";
import { useEffect, useState } from "react";
import Wrapper from "./components/Wrapper/Wrapper.styled";
import { GlobalStyle, Loading } from "./Global.styled";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  function addCard() {
    const newCard = {
      id: cards.length + 1,
      theme: "Research",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <PopExit />

        <PopNewCard />

        <PopBrowse />

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

export default App;
