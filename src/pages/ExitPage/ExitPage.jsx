import { Link } from "react-router-dom";
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
  return (
    <StyledPopExit>
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
            <PopExitGroup>
              <PopExitBtnYes onClick={exitAuth}>Да, выйти</PopExitBtnYes>
              {/* <button className="pop-exit__exit-yes _hover01" id="exitYes" >
                <Link to={AppRoutes.HOME} >Да, выйти</Link>
              </button> */}
              <Link to={AppRoutes.HOME}>
                <PopExitBtnNo>Нет, остаться</PopExitBtnNo>
              </Link>
            </PopExitGroup>
        </PopExitBlock>
      </PopExitContainer>
    </StyledPopExit>
  );
}

export default Exit;
