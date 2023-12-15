import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import NewCard from "./components/NewCard/NewCard";
import PopExit from "./components/PopExit/Exit";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import { cardList } from "./data";
import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  function addCard() {
    const newCard = {
      id: cardList.length + 1,
      theme: "Research",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cardList, newCard]);
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div className="wrapper">
        {/* <!-- pop-up start--> */}
        <PopExit />

        <NewCard />

        <PopBrowse />
        {/* <!-- pop-up end--> */}

        <Header addCard={addCard} />
        {isLoading ? (
          <div className="loading">Данные загружаются...</div>
        ) : (
          <Main cards={cards} />
        )}
      </div>
    </>
  );
}

export default App;
