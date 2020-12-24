import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: 180px 1fr;
  grid-template-rows: 32px 1fr;
  grid-template-areas: 
    "header header"
    "side main";
`;

export const MainHeader = styled.header`
  grid-area: header;
  border-bottom: 3px solid #2a2a2a;
`;

export const MainPane = styled.section`
  grid-area: main;
  position: relative;
  flex: 1;
`;

export const SidePane = styled.section`
  grid-area: side;
  border-right: 3px solid #2a2a2a;
  flex: 1;
`;
