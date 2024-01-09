import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import { GlobalStyle } from "../../Global.styled";
import {
  Container,
  Modal,
  ModalBlock,
  ModalBtn,
  ModalTtl,
  Wrapper,
} from "./NotFoundPage.styled";

export default function NotFound() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Modal>
            <ModalBlock>
              <ModalTtl>
                <img src="images/404.png" alt="error" />
                <h2>Страница не найдена</h2>
              </ModalTtl>
              <Link to={AppRoutes.HOME}>
              <ModalBtn>
                Перейти на главную
              </ModalBtn>
              </Link>
            </ModalBlock>
          </Modal>
        </Container>
      </Wrapper>
    </>
  );
}
