import Card from "../Card/Card";

const cards = [
  {
    id: 0,
    name: "Название задачи",
    discription: "",
    date: "30.10.23",
    category: "Web Design",
    color: "_orange",
    status: "",
  },
  {
    id: 1,
    name: "Название задачи",
    discription: "",
    date: "30.10.23",
    category: "Research",
    color: "_green",
    status: "",
  },
  {
    id: 2,
    name: "Название задачи",
    discription: "",
    date: "30.10.23",
    category: "Web Design",
    color: "_orange",
    status: "",
  },
  {
    id: 3,
    name: "Название задачи",
    discription: "",
    date: "30.10.23",
    category: "Copywriting",
    color: "_purple",
    status: "",
  },
  {
    id: 4,
    name: "Название задачи",
    discription: "",
    date: "30.10.23",
    category: "Web Design",
    color: "_orange",
    status: "",
  },
];

function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            color={card.color}
            category={card.category}
            name={card.name}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
