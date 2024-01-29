import { Container } from "../Common/Common.styled";
import Column from "../Column/Column";
import { MainBlock, MainContent, StyledMain } from "./Main.styled";
import useTasks from "../../hooks/useTasks";
import { statusList } from "../../lib/statusList";
import { cardListLoading } from "../../data";

function Main() {
  const { tasks } = useTasks();
  let cards = tasks;
  if (!tasks) {
    cards = cardListLoading;
  }
  return (
    <StyledMain>
      <Container>
        <MainBlock>
          <MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </StyledMain>
  );
}

export default Main;
