import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import NewCard from "./components/NewCard/NewCard";
import PopExit from "./components/PopExit/Exit";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import { cardList } from "./data";
import { useEffect, useState } from "react";
import Wrapper from "./components/Wrapper/Wrapper.styled";
import { GlobalStyle } from "./Global.styled";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);
  // const [theme, setTheme] = useState('light');

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
  
  // function toggleTheme() {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // }

  return (
    <>
    <GlobalStyle />
      <Wrapper>
        <PopExit />

        <NewCard />

        <PopBrowse />

        <Header addCard={addCard} />

        {isLoading ? (
          <div className="loading">Данные загружаются...</div>
        ) : (
          <Main cards={cards} />
        )}
      </Wrapper>
    </>
  );
}

export default App;
