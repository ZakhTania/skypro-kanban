import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";
import { Subttl } from "../Common/Common.styled";

export const StyledCalendar = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: ${breakpoints.lg}px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const CalendarTtl = styled.div`
  width: 182px;
  margin-bottom: 20px;

  ${Subttl}

  @media screen and (max-width: ${breakpoints.lg}px) {
    padding: 0;
  }
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;
export const CalendarP = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;

  @media screen and (max-width: ${breakpoints.lg}px) {
    font-size: 14px;
  }
  & span {
    color: ${(props) => props.theme.text};
  }
`;
