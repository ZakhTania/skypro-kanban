import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: ${props => props.theme.text};
}
`;

export const Loading = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 30px auto;
  padding: 0 40px;
  color: #94a6be;
  font-size: 18px;
  font-weight: 400;
`;
