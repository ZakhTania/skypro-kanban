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
} from "./SignUpPage.styled";
import Input from "../../components/Common/Input/Input";
import { GlobalStyle } from "../../Global.styled";

export default function SignUp({ setAuth }) {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Modal>
            <ModalBlock>
              <ModalTtl>
                <h2>Регистрация</h2>
              </ModalTtl>
              <ModalFormLogin>
                <Input type="text" name="first-name" placeholder="Имя" />
                <Input type="text" name="login" placeholder="Эл. почта" />
                <Input type="password" name="password" placeholder="Пароль" />
                <ModalBtn onClick={setAuth}>Зарегистрироваться</ModalBtn>
                <ModalFormGroup>
                  <p>
                    Уже есть аккаунт?{" "}
                    <Link to={AppRoutes.SIGNIN}>Войдите здесь</Link>
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
