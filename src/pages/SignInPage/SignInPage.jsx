import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import {
  Container,
  Modal,
  ModalBlock,
  ModalBtn,
  ModalFormGroup,
  ModalFormLogin,
  ModalTtl,
  Wrapper,
} from "./SignInPage.styled";
import Input from "../../components/Common/Input/Input";
import { GlobalStyle } from "../../Global.styled";

export default function SignIn({ setAuth }) {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Modal>
            <ModalBlock>
              <ModalTtl>
                <h2>Вход</h2>
              </ModalTtl>
              <ModalFormLogin>
                <Input type="text" name="login" placeholder="Эл. почта" />
                <Input type="password" name="password" placeholder="Пароль" />
                <ModalBtn onClick={setAuth}>Войти</ModalBtn>
                <ModalFormGroup>
                  <p>
                    Нужно зарегистрироваться?
                    <Link to={AppRoutes.SIGNUP}>Регистрируйтесь здесь</Link>
                  </p>
                </ModalFormGroup>
              </ModalFormLogin>
            </ModalBlock>
          </Modal>
        </Container>
      </Wrapper>
    </>
  );
}
