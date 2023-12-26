import { useEffect, useState } from "react";
import { GlobalStyle, Loading } from "../../Global.styled";
import { cardList } from "../../data";
import Wrapper from "../../components/Wrapper/Wrapper.styled";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import PopNewCard from "../../components/PopNewCard/PopNewCard";
import "../../App.css";



export default function MainPage() {
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
