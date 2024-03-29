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
import { useState } from "react";
import { getAuth } from "../../API";

export default function SignIn({ setAuth }) {

 
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  const onLoginChange = (e) => {
    setLoginData({
      ...loginData,
      login: e.target.value,
    });
  };

  const onPasswordChange = (e) => {
    setLoginData({
      ...loginData,
      password: e.target.value,
    });
  };
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
                <Input
                  type="text"
                  name="login"
                  placeholder="Логин"
                  value={loginData.login}
                  onChange={onLoginChange}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={loginData.password}
                  onChange={onPasswordChange}
                />
                <ModalBtn 
                  onClick={(e) => {
                    e.preventDefault();
                    setAuth(loginData, getAuth);
                  }}
                >
                  Войти
                </ModalBtn>
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
