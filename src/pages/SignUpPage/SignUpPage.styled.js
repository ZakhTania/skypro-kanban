import styled from "styled-components";
import { hover01 } from "../../components/Common/Common.styled";
import { breakpoints } from "../../lib/breakpoints";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.body};
`;

export const Container = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${breakpoints.sm}px) {
    background-color: ${(props) => props.theme.head};
  }
`;

export const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.head};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${(props) => props.theme.border};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: ${breakpoints.sm}px) {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: none;
    border: none;
    box-shadow: none;
  }
`;

export const ModalTtl = styled.div`
  & h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
  }
`;

export const ModalBtn = styled.button`
  width: 100%;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #fff;

  ${hover01}

  @media screen and (max-width: ${breakpoints.sm}px) {
    height: 40px;
  }
`;

export const ModalFormLogin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & input:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const ModalFormGroup = styled.div`
  text-align: center;

  & p,
  a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }
  & a {
    text-decoration: underline;
  }
`;

export const ModalBtnErr = styled.button`
  width: 100%;
  height: 30px;
  background-color: #94a6be;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #fff;

  @media screen and (max-width: ${breakpoints.sm}px) {
    height: 40px;
  }
`;

export const TextError = styled.div`
  text-align: center;
  color: #f84d4d;
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
`;
