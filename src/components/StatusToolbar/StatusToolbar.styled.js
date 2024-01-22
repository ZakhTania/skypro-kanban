import styled from "styled-components";


export const StatusThemeInput = styled.input`
  display: none;
  &:checked + label {
    background: #94a6be;
    color: #ffffff;
  }
`;

export const StatusThemeLabel = styled.label`
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
`;