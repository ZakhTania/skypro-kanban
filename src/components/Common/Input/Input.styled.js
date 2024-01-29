import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: ${prop => prop.$err ? '0.7px solid #F84D4D' : `0.7px solid rgba(148, 166, 190, 0.4)`};
  outline: none;
  padding: 10px 8px;
  background-color:  ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94A6BE;
  }
  &::-moz-placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94A6BE;
  }
`;
