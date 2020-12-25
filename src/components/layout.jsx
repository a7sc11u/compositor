import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: 230px 1fr 240px;
  grid-template-rows: 32px 1fr;
  grid-template-areas: 
    "header header header"
    "left main right";
`;

export const MainHeader = styled.header`
  grid-area: header;
  padding: 8px;
  border-bottom: 3px solid #2a2a2a;
  font-size: 13px;
`;

export const MainPane = styled.section`
  grid-area: main;
  position: relative;
  flex: 1;
`;

export const LeftPane = styled.section`
  grid-area: left;
  border-right: 3px solid #2a2a2a;
  flex: 1;
  padding: 8px;
  font-size: 13px;
`;

export const RightPane = styled.section`
  grid-area: right;
  border-left: 3px solid #2a2a2a;
  flex: 1;
  padding: 8px;
  font-size: 13px;
  overflow-wrap: break-word;
`;
