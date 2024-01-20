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
import useUser from "../../hooks/useUser";

function Exit() {
  let navigate = useNavigate();

  const {logOut} = useUser();
  
  return (
    <StyledPopExit>
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <PopExitGroup>
            <PopExitBtnYes onClick={logOut}>Да, выйти</PopExitBtnYes>
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
