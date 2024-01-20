import { Container } from "../Common/Common.styled";
import Column from "../Column/Column";
import { MainBlock, MainContent, StyledMain } from "./Main.styled";
import useTasks from "../../hooks/useTasks";

function Main() {
  const { tasks } = useTasks();
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  return (
    <StyledMain>
      <Container>
        <MainBlock>
          <MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={tasks.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </StyledMain>
  );
}

export default Main;
