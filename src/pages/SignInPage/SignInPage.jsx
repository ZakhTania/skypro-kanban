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
} from "./SignInPage.styled";
import Input from "../../components/Common/Input/Input";

export default function SignIn({ setAuth }) {
  return (
    <Wrapper>
      <ContainerSignUp>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Вход</h2>
            </ModalTtl>
            <ModalFormLogin>
              <Input type="text" name="login" placeholder="Эл. почта" />
              <Input type="password" name="password" placeholder="Пароль" />
              <ModalBtnSignUpEnt onClick={setAuth}>Войти</ModalBtnSignUpEnt>
              <ModalFormGroup>
                <p>
                  Нужно зарегистрироваться?
                  <Link to={AppRoutes.SIGNUP}>Регистрируйтесь здесь</Link>
                </p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignUp>
    </Wrapper>
  );
}
