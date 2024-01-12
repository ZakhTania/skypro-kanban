import Card from "../Card/Card";
import {
  ColumnTitle,
  ColumnTitleP,
  StyledCards,
  StyledColumn,
} from "./Column.styled";

function Column({ title, cardList }) {
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
          />
        ))}
      </StyledCards>
    </StyledColumn>
  );
}

export default Column;
