import { Container } from "../Common/Common.styled";
import Column from "../Column/Column";
import { MainBlock, MainContent, StyledMain } from "./Main.styled";
// import useTasks from "../../hooks/useTasks";
import { statusList } from "../../lib/statusList";

function Main({tasks}) {
if(!tasks) {
  return
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
