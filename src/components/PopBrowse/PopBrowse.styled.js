import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";
import { Subttl, hover01, hover03 } from "../Common/Common.styled";
import { themeStyles } from "../../lib/theme";

export const StyledPopBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  @media screen and (max-width: ${breakpoints.lg}px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: ${breakpoints.lg}px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.head};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid ${(props) => props.theme.border};
  position: relative;

  @media screen and (max-width: ${breakpoints.lg}px) {
    border-radius: 0;
  }

  @media screen and (max-width: ${breakpoints.md}px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const StatusP = styled.p`
  margin-bottom: 14px;

  ${Subttl}
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PopBrowseTtl = styled.h3`
  color: ${(props) => props.theme.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const PopBrowseTopWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.lg}px) {
    display: block;
  }
`;
export const PopBrowseTopForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: ${breakpoints.md}px) {
    max-width: 100%;
  }
`;
export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseAreaLabel = styled.label`
  ${Subttl}
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${(props) => props.theme.body};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  color: #94a6be;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: ${breakpoints.md}px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const StatusThemeGray = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  /* color: #94A6BE; */
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  background: #94a6be;
  color: ${(props) => props.theme.head};
`;

export const GrayP = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  background: #94a6be;
  color: ${(props) => props.theme.head};
`;

export const ThemeP = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;

export const CategoriesTheme = styled.div`
  display: ${({ $top }) => ($top ? "inline-block" : "none")};
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  background-color: ${({ $themeColor }) =>
    themeStyles[$themeColor]?.backgroundColor || "#b4fdd1"};

  ${ThemeP} {
    color: ${({ $themeColor }) => themeStyles[$themeColor]?.color || "#06b16e"};
  }

  @media screen and (max-width: ${breakpoints.md}px) {
    display: ${({ $top }) => ($top ? "none" : "inline-block")};
  }
`;

export const CategoriesP = styled.p`
  display: none;
  color: ${(props) => props.theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;

  @media screen and (max-width: ${breakpoints.md}px) {
    display: block;
    margin-bottom: 20px;
  }
`;
export const PopBrowseBtnEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const BtnGroup = styled.div`
  & button {
    margin-right: 8px;
  }

  @media screen and (max-width: ${breakpoints.md}px) {
    width: 100%;
    & button {
      margin-right: 0px;
    }
  }
`;

export const BtnBG = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #fff;

  & a {
    color: #fff;
  }
  ${hover01}
  @media screen and (max-width: ${breakpoints.md}px) {
    width: 100%;
    height: 40px;
    margin-right: 0px;
  }
`;

export const BtnBOR = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;

  & a {
    color: #565eef;
  }

  ${hover03}
  @media screen and (max-width: ${breakpoints.md}px) {
    width: 100%;
    height: 40px;
    margin-right: 0px;
  }
`;
