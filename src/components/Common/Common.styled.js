import styled, { css } from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: ${breakpoints.md}px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const Subttl = styled.label`
	color: #000;
	font-size: 14px;
	font-weight: 600;
	line-height: 1;

`

export const hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const hover02 = css`
  &:hover {
    color: #33399b;
  }
  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

export const hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

export const hover03A = css`
  &:hover {
    color: #ffffff;
  }
`;
