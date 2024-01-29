import Card from "../Card/Card";
import {
  ColumnTitle,
  ColumnTitleP,
  StyledCards,
  StyledColumn,
} from "./Column.styled";

function Column({ title, cardList }) {
  let category;
  switch (title) {
    case "Без статуса":
      category = "no_status";
      break;
    case "Нужно сделать":
      category = "todo";
      break;
    case "Тестирование":
      category = "test";
      break;
    case "Готово":
      category = "done";
      break;
    default:
      category = "no_status";
  }

  return (
    <StyledColumn>
      <ColumnTitle>
        <ColumnTitleP>{title}</ColumnTitleP>
      </ColumnTitle>
      <StyledCards>
        {cardList.map((card) => (
          <Card
            key={card._id}
            theme={card.topic}
            title={card.title}
            date={card.date}
            category={category}
            id={card._id}
          />
        ))}
      </StyledCards>
    </StyledColumn>
  );
}

export default Column;
