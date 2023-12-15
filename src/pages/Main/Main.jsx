import "./Main.css";
import Column from "../../components/Column/Column";
import { cardList } from "../../data";

function Main() {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cardList.filter((card) => card.status === status)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
