import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import {
  Container,
  Modal,
  ModalBlock,
  ModalBtn,
  ModalBtnErr,
  ModalFormGroup,
  ModalFormLogin,
  ModalTtl,
  TextError,
  Wrapper,
} from "./SignInPage.styled";
import Input from "../../components/Common/Input/Input";
import { GlobalStyle } from "../../Global.styled";
import { useState } from "react";
import { getAuth } from "../../API";
import useUser from "../../hooks/useUser";

export default function SignIn() {
  const [error, setError] = useState(false);
  const { login } = useUser();
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  function setAuth(loginData) {
    getAuth(loginData)
      .then((data) => {
        login(data.user);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
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
                  placeholder="Эл. почта"
                  value={loginData.login}
                  onChange={onLoginChange}
                  err={error ? "error" : null}
                  onClick={() => {
                    setError(false);
                  }}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={loginData.password}
                  onChange={onPasswordChange}
                  err={error ? "error" : null}
                  onClick={() => {
                    setError(false);
                  }}
                />

                {error ? (
                  <>
                    <TextError>{error}</TextError>
                    <ModalBtnErr
                      disabled
                      onClick={(e) => {
                        e.preventDefault();
                        setAuth(loginData);
                      }}
                    >
                      Войти
                    </ModalBtnErr>
                  </>
                ) : (
                  <ModalBtn
                    onClick={(e) => {
                      e.preventDefault();
                      setAuth(loginData);
                    }}
                  >
                    Войти
                  </ModalBtn>
                )}

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
