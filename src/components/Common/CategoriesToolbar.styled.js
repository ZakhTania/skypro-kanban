import styled from "styled-components";
import { themeStyles } from "../../lib/theme";
import { breakpoints } from "../../lib/breakpoints";

export const Checkbox = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesP = styled.p`
  display: block;
  color: ${(props) => props.theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;

  @media screen and (max-width: ${breakpoints.md}px) {
    display: none;
  }
`;

export const RadioToolbar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const RadioToolbarInput = styled.input`
  display: none;
  &:checked + label {
    opacity: 1 !important;
  }
`;

export const GreenLabel = styled.label`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  color: ${themeStyles._green.color};
  background-color: ${themeStyles._green.backgroundColor};
  &:hover {
    opacity: 1 !important;
  }
`;
export const OrangeLabel = styled.label`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  color: ${themeStyles._orange.color};
  background-color: ${themeStyles._orange.backgroundColor};
  &:hover {
    opacity: 1 !important;
  }
`;

export const PurpleLabel = styled.label`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  color: ${themeStyles._purple.color};
  background-color: ${themeStyles._purple.backgroundColor};
  &:hover {
    opacity: 1 !important;
  }
`;
