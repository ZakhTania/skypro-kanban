import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import {
  ContainerSignUp,
  Modal,
  ModalBlock,
  ModalBtnSignUpEnt,
  ModalFormGroup,
  ModalFormLogin,
  ModalTtl,
  Wrapper,
} from "./SignUpPage.styled";
import Input from "../../components/Common/Input/Input";

export default function SignUp({ setAuth }) {
  return (
    <Wrapper>
      <ContainerSignUp>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Регистрация</h2>
            </ModalTtl>
            <ModalFormLogin>
              <Input type="text" name="first-name" placeholder="Имя" />
              <Input type="text" name="login" placeholder="Эл. почта" />
              <Input type="password" name="password" placeholder="Пароль" />
              <ModalBtnSignUpEnt onClick={setAuth}>
                Зарегистрироваться
              </ModalBtnSignUpEnt>
              <ModalFormGroup>
                <p>
                  Уже есть аккаунт?{" "}
                  <Link to={AppRoutes.SIGNIN}>Войдите здесь</Link>
                </p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignUp>
    </Wrapper>
  );
}
