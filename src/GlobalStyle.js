import { createGlobalStyle } from "styled-components";
import background from "./background1.jpg";

export const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border - box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

html{
  font-family: 'Playfair Display', serif;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 75px 35px 75px 35px;
  background-image: url("${background}");
}
`; 