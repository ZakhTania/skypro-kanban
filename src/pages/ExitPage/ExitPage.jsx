import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import {
  PopExitBlock,
  PopExitBtnNo,
  PopExitBtnYes,
  PopExitContainer,
  PopExitGroup,
  PopExitTtl,
  StyledPopExit,
} from "./ExitPage.styled";

function Exit({ exitAuth }) {
  let navigate = useNavigate();
  
  return (
    <StyledPopExit>
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <PopExitGroup>
            <PopExitBtnYes onClick={exitAuth}>Да, выйти</PopExitBtnYes>
            <PopExitBtnNo onClick={() => navigate(AppRoutes.HOME)}>
              Нет, остаться
            </PopExitBtnNo>
          </PopExitGroup>
        </PopExitBlock>
      </PopExitContainer>
    </StyledPopExit>
  );
}

export default Exit;
