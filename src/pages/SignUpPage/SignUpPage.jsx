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
import { getSignUp } from "../../API";
import { useState } from "react";
import useUser from "../../hooks/useUser";

export default function SignUp() {
  const { login } = useUser();
  const [loginData, setLoginData] = useState({
    login: "",
    name: "",
    password: "",
  });

  function setReg(loginData) {
    getSignUp(loginData).then((data) => {
      login(data.user);
    });
  }
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

  const onNameChange = (e) => {
    setLoginData({
      ...loginData,
      name: e.target.value,
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
                <h2>Регистрация</h2>
              </ModalTtl>
              <ModalFormLogin>
                <Input
                  type="text"
                  name="first-name"
                  placeholder="Имя"
                  value={loginData.name}
                  onChange={onNameChange}
                />
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
                    setReg(loginData);
                  }}
                >
                  Зарегистрироваться
                </ModalBtn>
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
